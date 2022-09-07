<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'


const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')



watch(() => route.params, async (toParams, previousParams) => {
    lang.value = toParams.lang ? toParams.lang : 'ua';
})



</script>
    
    
<template>
    <div class="cursor"></div>
    <header>
        <span class="day-night">
            <img src="/src/assets/images/day.png">
            <b></b>
            <img src="/src/assets/images/night.png">
        </span>
        <ul class="menu">
            <li><a href="/" class="logo"><img src="/src/assets/images/logo-small.png"></a></li>
            <li>
                <template v-if="lang === 'ua'">
                    <RouterLink to="/ua">Головна</RouterLink>
                </template>
                <template v-if="lang === 'ru'">
                    <RouterLink to="/ru">Главная</RouterLink>
                </template>
                <template v-if="lang === 'en'">
                    <RouterLink to="/en">Home</RouterLink>
                </template>
            </li>
            <li>
                <template v-if="lang === 'ua'">
                    <RouterLink to="/portfolio/ua">Портфолiо</RouterLink>
                </template>
                <template v-if="lang === 'ru'">
                    <RouterLink to="/portfolio/ru">Портфолио</RouterLink>
                </template>
                <template v-if="lang === 'en'">
                    <RouterLink to="/portfolio/en">Portfolio</RouterLink>
                </template>
            </li>
            <li>
                <template v-if="lang === 'ua'">
                    <RouterLink to="/calculator/ua">Калькулятор</RouterLink>
                </template>
                <template v-if="lang === 'ru'">
                    <RouterLink to="/calculator/ru">Калькулятор</RouterLink>
                </template>
                <template v-if="lang === 'en'">
                    <RouterLink to="/calculator/en">Calculator</RouterLink>
                </template>
            </li>
            <li><a>Послуги</a>
                <ul>
                    <li><a>Розробка сайту</a></li>
                    <li><a>Розробка Landing page</a></li>
                    <li><a>Розробка Iнтернет магазину</a></li>
                    <li><a>Контекстна реклама</a></li>
                    <li><a>Розробка логотипу</a></li>
                    <li><a>Розробка фiрмового стилю</a></li>
                    <li><a>SEO просування</a></li>
                </ul>
            </li>
            <li><a>Вiдгуки</a></li>
            <li><a>Контакти</a></li>
            <li><a class="a23 magic-hover magic-hover__square forma-up">
                    <template v-if="lang === 'ua'"><span>Залишити заявку</span></template>
                    <template v-if="lang === 'ru'"><span>Оставить заявку</span></template>
                    <template v-if="lang === 'en'"><span>Gat a quote</span></template>
                </a></li>
        </ul>

        <div class="scroll-progress" id="myBar"></div>



        <div class="widget widget_polylang">
            <ul>
                <li class="ua">
                    <RouterLink to="ua">UA</RouterLink>
                </li>
                <li class="ru">
                    <RouterLink to="ru">RU</RouterLink>
                </li>
                <li class="en">
                    <RouterLink to="en">EN</RouterLink>
                </li>
            </ul>
        </div>

    </header>



    <div id="body-back-fon"></div>



    <div class="assassin">
        <b class="a"></b>
        <b class="b"></b>
        <b class="c"></b>
        <b class="d"></b>
        <b class="e"></b>
        <b class="f"></b>
    </div>

    <b class="a-up">
        <a href="#top-block" class="scrollto"><b></b><span>
                <template v-if="lang === 'ua'">Нагору</template>
                <template v-if="lang === 'ru'">Вверх</template>
                <template v-if="lang === 'en'">Up</template>
            </span>
        </a>
    </b>



</template>
    