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
    fetch('https://new.joie.com.ua/api/get-page-brand')
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
                <template v-if="lang === 'ua'">РОЗРОБКА <br>ФІРМОВОГО СТИЛЮ</template>
                <template v-if="lang === 'ru'">РАЗРАБОТКА<br>ФИРМЕННОГО СТИЛЯ </template>
                <template v-if="lang === 'en'">BRAND STYLE<br>DEVELOPMENT</template>
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


        <span v-html="pages.id1 && pages.id1['text_' + lang]"></span>


    </div>
</template>



  
