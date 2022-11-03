<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { startCursor } from '../assets/js/cursor.js'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

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
    console.log(form);

    const formData = new FormData();

    //formData.append('method', 'POST');
    formData.append('icon', form.icon);
    formData.append('name', form.name);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('yslyga', form.yslyga);
    formData.append('termin', form.termin);
    formData.append('message', form.message);


    // Display the key/value pairs
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }


    
    fetch('https://new.joie.com.ua/api/get-form', {
        method: 'POST',
        body: formData,
        headers: {
            //'Authorization': 'Bearer ' + this.token,
            //'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'multipart/form-data'
        },
        
    })
        .then(function (response) {

            //if (response.status != 201) {
            //    this.fetchError = response.status;
            //} else {
            //    response.json().then(function (data) {
            //        this.fetchResponse = data;
            //    }.bind(this));
            console.log(response);
        });
}

const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')


watch(() => route.params, async (toParams, previousParams) => {
    lang.value = toParams.lang ? toParams.lang : 'ua';
})

onMounted(() => {

    window.scrollTo(0, 0)
    startCursor();


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

    <div>



        <div class="home-banner small" id="top-block">

            <h1>JOIE WEB AGENCY</h1>
            <h2>
                <template v-if="lang === 'ua'">КОНТАКТИ <br>ВЕБ СТУДІЯ JOIE</template>
                <template v-if="lang === 'ru'">КОНТАКТЫ<br>ВЕБ СТУДИЯ JOIE </template>
                <template v-if="lang === 'en'">CONTACTS <br>JOIE WEB STUDIO</template>
            </h2>

            <div class="span">
                <p>Web joie is <span class="typed-text"></span><span class="cursore">&nbsp;</span></p>
            </div>

            <a class="a23 magic-hover magic-hover__square forma-up">
                <template v-if="lang === 'ua'"><span>Залишити заявку</span></template>
                <template v-if="lang === 'ru'"><span>Оставить заявку</span></template>
                <template v-if="lang === 'en'"><span>Gat a quote</span></template>
            </a>




            <a href="#first-block" class="scrollto first-a-scroll"><b></b></a>
        </div>


        <div id="first-block" class="lust-works contakts">
            <span class="a">
                <h2>
                    <template v-if="lang === 'ua'"><span>Зворотній зв’язок</span></template>
                    <template v-if="lang === 'ru'"><span>Обратная связь</span></template>
                    <template v-if="lang === 'en'"><span>Callback</span></template>
                </h2>

                <template v-if="lang === 'ua'">

                    <Form method="post" action="https:/new.joie.com.ua/joie-callback.php" :validation-schema="schema"
                        enctype="multipart/form-data">

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
                        <p>
                            <a class="a23 magic-hover magic-hover__square">
                                <button type="button" @click="forma_send(e)">
                                    <span>
                                        <template v-if="lang === 'ua'"><span>Надіслати</span></template>
                                        <template v-if="lang === 'ru'"><span>Отправить</span></template>
                                        <template v-if="lang === 'en'"><span>Send</span></template>
                                    </span>
                                </button>
                            </a>
                        </p>
                    </Form>
                </template>
            </span>

            <span class="b">
                <h2>
                    <template v-if="lang === 'ua'"><span>Телефонуйте нам!</span></template>
                    <template v-if="lang === 'ru'"><span>Звоните нам!</span></template>
                    <template v-if="lang === 'en'"><span>Call us!</span></template>
                </h2>
                <ul>
                    <li><a href="tel:+380984543099"><img src="/src/assets/images//call.png"> +38-098-4543-099</a></li>
                    <li><a href="tel:+380505739439"><img src="/src/assets/images//call.png"> +38-050-5739-439</a></li>
                    <li><a href="viber://chat?number=+380984543099"><img src="/src/assets/images//viber.png"> Viber
                            Call</a></li>
                    <li><a target="blank" href="https://t.me/webjoie" rel="noopener noreferrer"><img
                                src="/src/assets/images//telegram.png"> Telegram Call</a></li>
                    <li><a target="blank" href="https://wa.me/380984543099" rel="noopener noreferrer"><img
                                src="/src/assets/images//whatsapp.png"> WhatsApp Call</a></li>
                    <li><a href="mailto:info@joie.com.ua"><img src="/src/assets/images//mail.png">info@joie.com.ua</a>
                    </li>
                </ul>
            </span>
            <div>
            </div>
        </div>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4156.986103934443!2d30.476845192668122!3d50.38171682126949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8e8b93f90fb%3A0x70511ace3af32e7d!2z0KDQsNC30YDQsNCx0L7RgtC60LAg0Lgg0YHQvtC30LTQsNC90LjQtSDRgdCw0LnRgtC-0LIgLSDQstC10LEg0YHRgtGD0LTQuNGPIEpvaWU!5e0!3m2!1sru!2sua!4v1523008016793"
            width="100%" height="450px" frameborder="0" style="border:0" allowfullscreen=""></iframe>

    </div>
</template>
