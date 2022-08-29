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
    <header>

        <span class="day-night">
            <img src="/src/assets/images/day.png">
            <b></b>
            <img src="/src/assets/images/night.png">
        </span>

        <div class="menu">
            <a href="/" class="logo"><img src="/src/assets/images/logo-small.png"></a>

            <li class="call-top"><a href="#." class="call-top"><img src="/src/assets/images/call.png"></a>
                <ul>
                    <li><a href="tel:+380984543099"><img src="/src/assets/images/call.png"> +38-098-4543-099</a></li>
                    <li><a href="tel:+380505739439"><img src="/src/assets/images/call.png"> +38-050-5739-439</a></li>
                    <li><a href="viber://chat?number=+380984543099"><img src="/src/assets/images/viber.png"> Viber
                            Call</a></li>
                    <li><a target="blank" href="https://t.me/webjoie" rel="noopener noreferrer"><img
                                src="/src/assets/images/telegram.png"> Telegram Call</a></li>
                    <li><a target="blank" href="https://wa.me/380984543099" rel="noopener noreferrer"><img
                                src="/src/assets/images/whatsapp.png"> WhatsApp Call</a></li>
                    <li><a><img src="/src/assets/images/mail.png"> info@joie.com.ua</a></li>
                </ul>
            </li>
            <a class="a23 magic-hover magic-hover__square forma-up">
                <span>
                    <template v-if="lang === 'ua'">Залишити заявку</template>
                    <template v-if="lang === 'ru'">Оставить заявку</template>
                    <template v-if="lang === 'en'">Get a quote</template>
                </span>
            </a>
            <a class="b-menu magic-hover magic-hover__square"><s>
                    <template v-if="lang === 'ua'">Меню</template>
                    <template v-if="lang === 'ru'">Меню</template>
                    <template v-if="lang === 'en'">Menu</template>
                </s>
                <b></b>
                <b></b>
                <b></b>
            </a>
        </div>
        <div class="scroll-progress" id="myBar"></div>



        <div class="widget widget_polylang">
            <ul>
                <li class="ua">
                    <RouterLink to="/ua">UA</RouterLink>
                </li>
                <li class="ru">
                    <RouterLink to="/ru">RU</RouterLink>
                </li>
                <li class="en">
                    <RouterLink to="/en">EN</RouterLink>
                </li>
            </ul>
        </div>

    </header>

    <div class="widget-content widget_nav_menu">
        <div>
            <ul class="menu">
                <li>
                    <RouterLink to="/">Головна</RouterLink>
                </li>
                <li>
                    <RouterLink to="/portfolio/">Портфолiо</RouterLink>
                </li>
                <li><a>Калькулятор</a></li>
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
            </ul>
        </div>
    </div>

    <div id="body-back-fon"></div>



    <div class="assassin">
        <b class="a"></b>
        <b class="b"></b>
        <b class="c"></b>
        <b class="d"></b>
        <b class="e"></b>
        <b class="f"></b>
    </div>

    <b class="a-up"><a href="#top-block" class="scrollto"><b></b><span>Нагору</span></a></b>



</template>
    