<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { startCursor } from '../assets/js/cursor.js'




const works = ref(0)
const pages = ref(0)
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

    document.body.classList.remove('page-small')

    /* Начало импорт АПИ*/
    fetch('https://new.joie.com.ua/api/get-works')
        .then(response => response.json())
        .then(data => {
            works.value = Object.keys(data).map((key) => data[key]).sort(function (a, b) { return a.weight - b.weight; });
        });

    /* Начало импорт АПИ*/
    fetch('https://new.joie.com.ua/api/get-page-shop')
        .then(response => response.json())
        .then(data => {
            let formatedData = {};
            data.forEach(it => {
                formatedData['id' + it.id] = it;
            });
            pages.value = formatedData;
        });

    document.body.classList.add('page-small')

})



</script>





<template>

    <div>



        <div class="home-banner small" id="top-block">

            <h1>JOIE WEB AGENCY</h1>
            <h2>
                <template v-if="lang === 'ua'">РОЗРОБКА <br>ІНТЕРНЕТ МАГАЗИНУ</template>
                <template v-if="lang === 'ru'">РАЗРАБОТКА <br>ИНТЕРНЕТ МАГАЗИНА</template>
                <template v-if="lang === 'en'">WEBSITE <br>WEB STORE</template>
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


        <section id="work">



            <div id="first-block" class="lust-works">

                <span class="label">WORKS</span>
                <h2>
                    <template v-if="lang === 'ua'"><span>ОСТАННI РОБОТИ</span></template>
                    <template v-if="lang === 'ru'"><span>ПОСЛЕДНИЕ РАБОТЫ</span></template>
                    <template v-if="lang === 'en'"><span>RECENT WORKS</span></template>
                </h2>

                <div id="portfoliolist" class="portfolio-area">



                    <template v-for="item in works" :key="item.weight">
                        <template v-if="item.is_shop_works === 1 && item.is_published === 1">
                            <div class="portfolio">
                                <img :src="'https://new.joie.com.ua/storage/' + item.image">
                                <span>
                                    <a class="magic-hover magic-hover__square" target="_blank"
                                        :href="'http://' + item.link" rel="noopener noreferrer">{{ item.link }}</a>
                                    <p v-if="lang === 'ua'">{{ item.title_ua }}</p>
                                    <p v-if="lang === 'ru'">{{ item.title_ru }}</p>
                                    <p v-if="lang === 'en'">{{ item.title_en }}</p>
                                </span>
                            </div>
                        </template>
                    </template>



                    <div class="portfolio">
                        <b class="banak">
                            <template v-if="lang === 'ua'">Тут може бути Ваш сайт! =)</template>
                            <template v-if="lang === 'ru'">Здесь может быть Ваш сайт! =)</template>
                            <template v-if="lang === 'en'">Your website could be here! =)</template>
                        </b>
                    </div>


                </div>


                <template v-if="lang === 'ua'">
                    <RouterLink class="a23 magic-hover magic-hover__square" to="/portfolio/ua"><span>Дивитися ще</span>
                    </RouterLink>
                </template>
                <template v-if="lang === 'ru'">
                    <RouterLink class="a23 magic-hover magic-hover__square" to="/portfolio/ua"><span>Смотреть еще</span>
                    </RouterLink>
                </template>
                <template v-if="lang === 'en'">
                    <RouterLink class="a23 magic-hover magic-hover__square" to="/portfolio/ua"><span>All
                            Portfolio</span></RouterLink>
                </template>


            </div>
        </section>


        <span v-html="pages.id1 && pages.id1['text_' + lang]"></span>


        <section id="sect2" class="active2">
            <div id="about-us">
                <span class="span">
                    <span v-html="pages.id2 && pages.id2['text_' + lang]"></span>
                    <a class="forma-up a23">
                        <template v-if="lang === 'ua'"><span>Обговорити проект</span></template>
                        <template v-if="lang === 'ru'"><span>Обсудить проект</span></template>
                        <template v-if="lang === 'en'"><span>Discuss Project</span></template>
                    </a>
                </span>
            </div>
        </section>

        <span v-html="pages.id3 && pages.id3['text_' + lang]"></span>
        <span v-html="pages.id4 && pages.id4['text_' + lang]"></span>

        <section id="sect6" class="">
            <span class="label">PRICE</span>
            <div id="prices" class="prices-home">
                <span v-html="pages.id5 && pages.id5['text_' + lang]"></span>
                <template v-if="lang === 'ua'">
                    <RouterLink class="a23" to="/calculator/ua"><span>Online Калькулятор вартостi</span></RouterLink>
                </template>
                <template v-if="lang === 'ru'">
                    <RouterLink class="a23" to="/calculator/ru"><span>Online Калькулятор стоимости</span></RouterLink>
                </template>
                <template v-if="lang === 'en'">
                    <RouterLink class="a23" to="/calculator/en"><span>Online cost calculator</span></RouterLink>
                </template>
            </div>
        </section>

        <span v-html="pages.id6 && pages.id6['text_' + lang]"></span>

    </div>
</template>



  
