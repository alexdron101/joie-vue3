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
        <a class="b-menu magic-hover magic-hover__square"><s>Меню</s>
            <b></b>
            <b></b>
            <b></b>
        </a>

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
            <li> <template v-if="lang === 'ua'">
                    <RouterLink to="/services/ua">Послуги</RouterLink>
                </template>
                <template v-if="lang === 'ru'">
                    <RouterLink to="/services/ru">Услуги</RouterLink>
                </template>
                <template v-if="lang === 'en'">
                    <RouterLink to="/services/en">Services</RouterLink>
                </template>
                <ul>
                    <li>
                        <template v-if="lang === 'ua'">
                            <RouterLink to="/services/website/ua">Розробка веб сайту</RouterLink>
                        </template>
                        <template v-if="lang === 'ru'">
                            <RouterLink to="/services/website/ru">Разработка сайта</RouterLink>
                        </template>
                        <template v-if="lang === 'en'">
                            <RouterLink to="/services/website/en">Web site development</RouterLink>
                        </template>
                    </li>
                    <li>
                        <template v-if="lang === 'ua'">
                            <RouterLink to="/services/landing/ua">Розробка landing page</RouterLink>
                        </template>
                        <template v-if="lang === 'ru'">
                            <RouterLink to="/services/landing/ru">Разработка landing page</RouterLink>
                        </template>
                        <template v-if="lang === 'en'">
                            <RouterLink to="/services/landing/en">Landing page development</RouterLink>
                        </template>
                    </li>
                    <li>
                        <template v-if="lang === 'ua'">
                            <RouterLink to="/services/ecommerce/ua">Розробка Iнтернет магазину</RouterLink>
                        </template>
                        <template v-if="lang === 'ru'">
                            <RouterLink to="/services/ecommerce/ru">Разработка Интернет магазина</RouterLink>
                        </template>
                        <template v-if="lang === 'en'">
                            <RouterLink to="/services/ecommerce/en">Ecommerce</RouterLink>
                        </template>
                    </li>
                    <li>
                        <template v-if="lang === 'ua'">
                            <RouterLink to="/services/ads/ua">Контекстна реклама</RouterLink>
                        </template>
                        <template v-if="lang === 'ru'">
                            <RouterLink to="/services/ads/ru">Контекстная реклама</RouterLink>
                        </template>
                        <template v-if="lang === 'en'">
                            <RouterLink to="/services/ads/en">Contextual advertising</RouterLink>
                        </template>
                    </li>
                    <li>
                        <template v-if="lang === 'ua'">
                            <RouterLink to="/services/logo/ua">Розробка логотипу</RouterLink>
                        </template>
                        <template v-if="lang === 'ru'">
                            <RouterLink to="/services/logo/ru">Разработка логотипа</RouterLink>
                        </template>
                        <template v-if="lang === 'en'">
                            <RouterLink to="/services/logo/en">Logo development</RouterLink>
                        </template>
                    </li>
                    <li>
                        <template v-if="lang === 'ua'">
                            <RouterLink to="/services/brand/ua">Розробка фiрмового стилю</RouterLink>
                        </template>
                        <template v-if="lang === 'ru'">
                            <RouterLink to="/services/brand/ru">Разработка фирменного стиля</RouterLink>
                        </template>
                        <template v-if="lang === 'en'">
                            <RouterLink to="/services/brand/en">Corporate identity development</RouterLink>
                        </template>
                    </li>
                    <li>
                        <template v-if="lang === 'ua'">
                            <RouterLink to="/services/seo/ua">SEO просування</RouterLink>
                        </template>
                        <template v-if="lang === 'ru'">
                            <RouterLink to="/services/seo/ru">SEO продвижение</RouterLink>
                        </template>
                        <template v-if="lang === 'en'">
                            <RouterLink to="/services/seo/en">SEO promotion</RouterLink>
                        </template>
                    </li>
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
    