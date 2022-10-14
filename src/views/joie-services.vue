<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { startCursor } from '../assets/js/cursor.js'


const pages = ref(0)
const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')

watch(() => route.params, async (toParams, previousParams) => {
    lang.value = toParams.lang ? toParams.lang : 'ua';
})


onMounted(() => {
    document.body.classList.add('page-small')
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




    /* Начало импорт АПИ*/
    fetch('https://new.joie.com.ua/api/get-page-home')
        .then(response => response.json())
        .then(data => {
            let formatedData = {};
            data.forEach(it => {
                formatedData['id' + it.id] = it;
            });
            pages.value = formatedData;
        });

})



</script>
    
    
    
    
    
<template>

    <div>



        <div class="home-banner small" id="top-block">
            <h1>JOIE WEB AGENCY</h1>
            <h2>
                <template v-if="lang === 'ua'">Калькулятор<br>вартостi</template>
                <template v-if="lang === 'ru'">Калькулятор<br>Стоимости</template>
                <template v-if="lang === 'en'">OUR<br>PRICE LIST</template>
            </h2>
            <div class="span"><span id="typed-en"></span><span class="typed-cursor"></span></div>
            <a class="a23 magic-hover magic-hover__square forma-up">
                <template v-if="lang === 'ua'"><span>Залишити заявку</span></template>
                <template v-if="lang === 'ru'"><span>Оставить заявку</span></template>
                <template v-if="lang === 'en'"><span>Gat a quote</span></template>
            </a>
            <a href="#sect1" class="scrollto first-a-scroll"><b></b></a>
        </div>


        <section id="we-are">
            <span class="label">WE ARE</span>

            <div class="services">

                <h2>{{ (pages.id11 && pages.id11['text_' + lang]) || "" }}</h2>
                <p>{{ (pages.id12 && pages.id12['text_' + lang]) || "" }}</p>

                <span class="wow fadeInUp">
                    <div class="a"><img src="/src/assets/images/y1.png">
                        <span v-html="pages.id13 && pages.id13['text_' + lang]"></span>
                        <a class="readmore" href="/home-ua/poslygi/rozrobka-saity/">{{ (pages.id20 && pages.id20['text_'
                        + lang]) ||
                        ""
                        }}</a>
                    </div>

                    <div class="a"><img src="/src/assets/images/y2.png">
                        <span v-html="pages.id14 && pages.id14['text_' + lang]"></span>
                        <a class="readmore" href="/home-ua/poslygi/razrabotka-landing-page/">{{ (pages.id20 &&
                        pages.id20['text_' +
                        lang]) || ""
                        }}</a>
                    </div>

                    <div class="a"><img src="/src/assets/images/y3.png">
                        <span v-html="pages.id15 && pages.id15['text_' + lang]"></span>
                        <a class="readmore" href="/home-ua/poslygi/rozrobka-internet-magaziny/">{{ (pages.id20 &&
                        pages.id20['text_'
                        +
                        lang]) || ""
                        }}</a>
                    </div>

                    <div class="a"><img src="/src/assets/images/y4.png">
                        <span v-html="pages.id16 && pages.id16['text_' + lang]"></span>
                        <a class="readmore" href="/home-ua/poslygi/kontexstnaya-reklama/">{{ (pages.id20 &&
                        pages.id20['text_' +
                        lang]) || ""
                        }}</a>
                    </div>

                    <div class="a"><img src="/src/assets/images/y5.png">
                        <span v-html="pages.id17 && pages.id17['text_' + lang]"></span>
                        <a class="readmore" href="/home-ua/poslygi/seo-prodvizenie/">{{ (pages.id20 &&
                        pages.id20['text_' + lang])
                        ||
                        ""
                        }}</a>
                    </div>

                    <div class="a"><img src="/src/assets/images/y6.png">
                        <span v-html="pages.id18 && pages.id18['text_' + lang]"></span>
                        <a class="readmore" href="/home-ua/poslygi/razrabotka-logotipa/">{{ (pages.id20 &&
                        pages.id20['text_' +
                        lang])
                        || ""
                        }}</a>
                    </div>

                    <div class="a"><img src="/src/assets/images/y7.png">
                        <span v-html="pages.id19 && pages.id19['text_' + lang]"></span>
                        <a class="readmore" href="/home-ua/poslygi/razrabotka-firmennogo-stilya/">{{ (pages.id20 &&
                        pages.id20['text_'
                        + lang]) || ""
                        }}</a>
                    </div>

                    <div class="b">
                        <img src="/src/assets/images/brain-min.png">
                    </div>
                </span>
            </div>
        </section>





    </div>
</template>
    
    
    
      
    