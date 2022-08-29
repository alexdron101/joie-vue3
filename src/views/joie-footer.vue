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
    <div id="footer">
        <div id="footer-in">
            <span class="span-a"><a href="/en/index.php"><img src="/src/assets/images/logo-small.png"></a>
                <template v-if="lang === 'ua'">
                    <p>Всі права захищені <br>© 2014-2022</p>
                </template>
                <template v-if="lang === 'ru'">
                    <p>Все права защищены<br>© 2014-2022</p>
                </template>
                <template v-if="lang === 'en'">
                    <p>All rights reserved <br>© 2014-2022</p>
                </template>
            </span>
            <span class="span-b">
                <ul>
                    <li><a><template v-if="lang === 'ua'">Про нас</template><template v-if="lang === 'ru'">О
                                нас</template><template v-if="lang === 'en'">About us</template></a></li>
                    <li><a><template v-if="lang === 'ua'">Розробка сайту</template><template
                                v-if="lang === 'ru'">Разработка сайта</template><template v-if="lang === 'en'">Website
                                development</template></a></li>
                    <li><a><template v-if="lang === 'ua'">Landing page</template><template v-if="lang === 'ru'">Landing
                                page</template><template v-if="lang === 'en'">Landing page</template></a></li>
                    <li><a><template v-if="lang === 'ua'">Iнтернет магазин</template><template
                                v-if="lang === 'ru'">Интернет магазин</template><template v-if="lang === 'en'">Web
                                store</template></a></li>
                    <li><a>Googe ads</a></li>
                    <li><a>Seo</a></li>
                    <li><a><template v-if="lang === 'ua'">Розробка логотипу</template><template
                                v-if="lang === 'ru'">Разработка логотипа</template><template v-if="lang === 'en'">Logo
                                development</template></a></li>
                    <li><a><template v-if="lang === 'ua'">Розробка брендбуку</template><template
                                v-if="lang === 'ru'">Разработка брендбука</template><template v-if="lang === 'en'">Brand
                                style</template></a></li>
                    <li><a><template v-if="lang === 'ua'">Портфолio</template><template
                                v-if="lang === 'ru'">Портфолио</template><template
                                v-if="lang === 'en'">Portfolio</template></a></li>
                    <li><a><template v-if="lang === 'ua'">Вiдгуки</template><template
                                v-if="lang === 'ru'">Отзывы</template><template
                                v-if="lang === 'en'">Reviews</template></a></li>
                    <li><a><template v-if="lang === 'ua'">Калькулятор</template><template
                                v-if="lang === 'ru'">Калькулятор</template><template
                                v-if="lang === 'en'">Calculator</template></a></li>
                    <li><a><template v-if="lang === 'ua'">Контакти</template><template
                                v-if="lang === 'ru'">Конткты</template><template
                                v-if="lang === 'en'">Contacts</template></a></li>
                </ul>
            </span>
            <span class="span-c">

                <a target="blank" href="/joie-site-brif.docx" rel="noopener"><img
                        src="/src/assets/images/pdf-min.png">Site Brief</a>
                <a target="blank" href="/shop-brif.docx" rel="noopener"><img src="/src/assets/images/pdf-min.png">Shop
                    Brief</a>
                <a target="blank" href="/logo-brif.docx" rel="noopener"><img src="/src/assets/images/pdf-min.png">Logo
                    Brief</a>
            </span>
            <span class="ii">
                <a target="blank" href="tel:+380984543099" rel="noopener"><img src="/src/assets/images/call.png"
                        width="100" height="100">+38 (098) 4543- 099</a>
                <a target="blank" href="tel:+380505739439" rel="noopener"><img src="/src/assets/images/call.png"
                        width="100" height="100">+38 (050) 5739- 439</a>
                <a target="blank" href="https://wa.me/380984543099" rel="noopener"><img
                        src="/src/assets/images/whatsapp.png" width="100" height="100">Whatsapp call </a>
                <a target="blank" href="//chat?number=+380984543099" rel="noopener"><img
                        src="/src/assets/images/viber.png" width="100" height="100">Viber chat</a>
                <a target="blank" href="https://t.me/webjoie" rel="noopener"><img src="/src/assets/images/telegram.png"
                        width="100" height="100">Telegram chat </a>
                <a target="blank" href="mailto:info@joie.com.ua" rel="noopener"><img src="/src/assets/images/mail.png"
                        width="100" height="100">info@ joie.com.ua</a>
            </span>
        </div>
    </div>
</template>
