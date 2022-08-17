<script setup>
/* Начало импорт АПИ*/
import { ref, onMounted } from 'vue'
import { startBrain } from '../assets/js/brain.js'
import { useRoute } from 'vue-router'
import { watch } from 'vue'


const works = ref(0)




const route = useRoute()

const lang = route.params.lang;

//const lang = route.params.lang;
// ----------------------------------------------------
// если роут = "/" , то язык по умолчанию - украинский
// ----------------------------------------------------
var lang = route.params.lang;
if (lang === '') {lang='ua';}



console.log("lang=",lang);
console.log("works=",works);



onMounted(() => {
  fetch('https://new.joie.com.ua/api/get-works')
    //.then(response => response.json())
    //.then(data => { users.value = data });
    .then(response => response.json())
    .then(data => { works.value = data;});

  // Try to start your function in this onMounted
  startBrain();
  

 // if (route.params.hasOwnProperty('lang')) { current_lang = route.params.lang; console.log("current_lang=",current_lang); }

})









</script>


<template>
<div>
  <div class="home-banner" id="top-block">
    <h1 class="wow fadeInLeft">JOIE WEB AGENCY</h1>
    <h2 class="wow fadeIn">WEBSITE DEVELOPMENT<br>FOR BUSINESS</h2>
    <div class="span"><span id="typed-en"></span><span class="typed-cursor"></span></div>
    <a class="a23 magic-hover magic-hover__square wow fadeInUp forma-up" data-wow-delay="1.0s"><span>Submit
        Application</span></a>

    <canvas id="canvas">Your browser does not support Canvas</canvas>


    <a href="#work" class="scrollto first-a-scroll"><b></b></a>
  </div>



  <section id="work" class="active">
    <div id="first-block" class="lust-works">
      <div id="portfoliolist" class="portfolio-area">

        <div v-for="item in works" :key="item.id" class="portfolio land wow fadeIn" data-wow-delay="0.0s" data-cat="land">
          <img :src="'https://new.joie.com.ua/storage/' + item.image">
          <span>
            <a target="_blank" href="https://apk-global.com/" rel="noopener noreferrer">apk-global.com</a>
            
            <p v-if="lang==='ua'">{{item.title_ua}}</p> 
            <p v-if="lang==='ru'">{{item.title_ru}}</p>
            <p v-if="lang==='en'">{{item.title_en}}</p>

          </span>
        </div>


        <div class="portfolio land wow fadeIn" data-wow-delay="1.2s" data-cat="land">
          <b class="banak">Тут може бути Ваш сайт! =)</b>
        </div>

      </div>
    </div>
  </section>
  </div>
</template>



<!--
<script setup>
import { myDirective as vMyDirective } from '../assets/js/brain.js'
</script>-->
