<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')

watch(() => route.params, async (toParams, previousParams) => {
    lang.value = toParams.lang ? toParams.lang : 'ua';
})

const form = {
    name: '',
    phone: '',
    email: '',
    yslyga: '',
    termin: '',
    message: '',
    method: '',
    icon: ''
};

const schema = yup.object({
    name: yup.string().required(),
    phone: yup.string().min(10),
    email: yup.string().required().email(),
});

function handleFileUpload(e) {
    form.icon = e.target.files[0];
    console.log(e.target.value);
}
function handleName(e) {
    form.name = e.target.value;
    console.log(e.target.value);
    console.log(this.form.name);
}
function handlePhone(e) {
    form.phone = e.target.value;
    console.log(e.target.value);
}
function handleEmail(e) {
    form.email = e.target.value;
    console.log(e.target.value);
}
function forma_send(e) {
    if (e.preventDefault) {
        e.preventDefault(); // отменить стандартное действие
    }

    const formData = new FormData();
    formData.append('icon', form.icon);
    formData.append('name', form.name);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('yslyga', form.yslyga);
    formData.append('termin', form.termin);
    formData.append('message', form.message);

    fetch('https://joie.com.ua/joie-callback.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Успешно отправлено:', data);
            alert("✅ Заявка отправлена!");
        })
        .catch(error => {
            console.error('Ошибка при отправке:', error);
            alert("❌ Ошибка при отправке.");
        });
}



onMounted(() => {

    window.scrollTo(0, 0)



    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    document.body.classList.add('page-small')

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
                            <RouterLink to="/services/landing-page/ua">Розробка landing page</RouterLink>
                        </template>
                        <template v-if="lang === 'ru'">
                            <RouterLink to="/services/landing-page/ru">Разработка landing page</RouterLink>
                        </template>
                        <template v-if="lang === 'en'">
                            <RouterLink to="/services/landing-page/en">Landing page development</RouterLink>
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
            <li>
                <template v-if="lang === 'ua'">
                    <RouterLink to="/reviews/ua">Вiдгуки</RouterLink>
                </template>
                <template v-if="lang === 'ru'">
                    <RouterLink to="/reviews/ru">Отзывы</RouterLink>
                </template>
                <template v-if="lang === 'en'">
                    <RouterLink to="/reviews/en">Reviews</RouterLink>
                </template>
            </li>
            <li>
                <template v-if="lang === 'ua'">
                    <RouterLink to="/contacts/ua">Контакти</RouterLink>
                </template>
                <template v-if="lang === 'ru'">
                    <RouterLink to="/contacts/ru">Контакты</RouterLink>
                </template>
                <template v-if="lang === 'en'">
                    <RouterLink to="/contacts/en">Contacts</RouterLink>
                </template>
            </li>
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


    <div class="forma-main"><div class="bod"><b class="forma-main-x"></b>
                 <h3>
                    <template v-if="lang === 'ua'"><span>Зворотній зв’язок</span></template>
                    <template v-if="lang === 'ru'"><span>Обратная связь</span></template>
                    <template v-if="lang === 'en'"><span>Callback</span></template>
                </h3>
    <Form :validation-schema="schema"
                          enctype="multipart/form-data"
                          @submit="forma_send">

                        <p>ФІО
                            <Field name="name" type="name" @change="handleName( $event )" />
                            <ErrorMessage name="name" />
                        </p>
                        <p>Телефон
                            <Field name="phone" type="phone" @change="handlePhone( $event )" />
                            <ErrorMessage name="phone" />
                        </p>
                        <p>E-mail
                            <Field name="email" type="email" @change="handleEmail( $event )" />
                            <ErrorMessage name="email" />
                        </p>
                        <p>Послуга
                            <Field name="yslyga" as="select" @change="handleYslyga( $event )">
                                <option disabled value="">Оберіть послугу</option>
                                <option value="Сайт візитка">Сайт візитка</option>
                                <option value="Сайт корпоративний">Сайт корпоративний</option>
                                <option value="Landing page">Landing page</option>
                                <option value="Інтернет магазин">Інтернет магазин</option>
                                <option value="SEO просування">SEO просування</option>
                                <option value="Контекстна реклама">Контекстна реклама</option>
                                <option value="Інше">Інше</option>
                            </Field>
                        </p>
                        <p>Бажані термiни
                            <Field name="termin" as="select" @change="handleTermin( $event )">
                                <option disabled value="">Оберіть термiн</option>
                                <option value="На вчора">На вчора</option>
                                <option value="До 1 тижня">До 1 тижня</option>
                                <option value="1-2 тижні">1-2 тижні</option>
                                <option value="До 4-8 тижнів">До 4-8 тижнів</option>
                                <option value="Терміни не важливі">Терміни не важливі</option>
                            </Field>
                        </p>
                        <p>Додати файл
                            <input type="file" @change="handleFileUpload( $event )" />
                        </p>
                        <p>Повідомлення
                            <textarea name="message" type="text" @change="handleTextarea( $event )"></textarea>
                        </p>
                        <p><button type="submit">
                            <a class="a23 magic-hover magic-hover__square">
                                
                                    <span>
                                        <template v-if="lang === 'ua'"><span>Надіслати</span></template>
                                        <template v-if="lang === 'ru'"><span>Отправить</span></template>
                                        <template v-if="lang === 'en'"><span>Send</span></template>
                                    </span>
                                
                            </a></button>
                        </p>
                    </Form>
</div></div>

</template>
    