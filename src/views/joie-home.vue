<script setup>
/* Начало импорт АПИ*/
import { ref, onMounted } from 'vue'
import { startBrain } from '../assets/js/brain.js'
import { useRoute } from 'vue-router'
import { watch } from 'vue'


const works = ref(0)
const pages = ref(0)
const route = useRoute()



//const lang = route.params.lang;
// ----------------------------------------------------
// если роут = "/" , то язык по умолчанию - украинский
// ----------------------------------------------------
var lang = route.params.lang;
if (lang === '') { lang = 'ua'; }



console.log("lang=", lang);
console.log("works=", works);



onMounted(() => {
  fetch('https://new.joie.com.ua/api/get-works')
    .then(response => response.json())
    .then(data => { works.value = data; });
  fetch('https://new.joie.com.ua/api/get-page-home')
    .then(response => response.json())
    //.then(data => { pages.value = data; });

    .then(data => {
      let formatedData = {};
      data.forEach(it => {
        formatedData['id' + it.id] = it;
      });
      pages.value = formatedData;


    });


  startBrain();



})


</script>


<template>
  <div>
    <div class="home-banner" id="top-block">

      <h1>{{ (pages.id5 && pages.id5['text_' + lang]) || "" }}</h1>

      <h2 v-html="pages.id6 && pages.id6['text_' + lang]"></h2>


      <div class="span"><span id="typed-en"></span><span class="typed-cursor"></span></div>

      <a class="a23 magic-hover magic-hover__square forma-up" v-html="pages.id7 && pages.id7['text_' + lang]"></a>

      <canvas id="canvas">Your browser does not support Canvas</canvas>


      <a href="#work" class="scrollto first-a-scroll"><b></b></a>
    </div>



    <section id="work" class="active">
      <div id="first-block" class="lust-works">
        <div id="portfoliolist" class="portfolio-area">


          <template v-for="item in works">
            <template v-if="item.is_lust_works === 1 && item.is_published === 1" >
              <div class="portfolio">
                <img :src="'https://new.joie.com.ua/storage/' + item.image">
                <span>
                  <a target="_blank" href="{{ item.link }}" rel="noopener noreferrer">{{ item.link }}</a>
                  {{item.weight}}
                  <p v-if="lang === 'ua'">{{ item.title_ua }}</p>
                  <p v-if="lang === 'ru'">{{ item.title_ru }}</p>
                  <p v-if="lang === 'en'">{{ item.title_en }}</p>
                </span>
              </div>
            </template>
          </template>



          <div class="portfolio land wow fadeIn" data-wow-delay="1.2s" data-cat="land">
            <b class="banak" v-html="pages.id10 && pages.id10['text_' + lang]"></b>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>




