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



    <div>
      <div class="home-banner" id="top-block">

        <h1>{{ (pages.id5 && pages.id5['text_' + lang]) || "" }}</h1>
        <h2 v-html="pages.id6 && pages.id6['text_' + lang]"></h2>

        <div class="span"><span id="typed-en"></span><span class="typed-cursor"></span></div>

        <a class="a23 magic-hover magic-hover__square forma-up" v-html="pages.id7 && pages.id7['text_' + lang]"></a>




        <a href="#work" class="scrollto first-a-scroll"><b></b></a>
      </div>
    </div>


    <section id="work">



      <div id="first-block" class="lust-works">

        <span class="label">WORKS</span>
        <h2>{{ (pages.id8 && pages.id8['text_' + lang]) || "" }}</h2>

        <div id="portfoliolist" class="portfolio-area">



          <template v-for="item in works" :key="item.weight">
            <template v-if="item.is_lust_works === 1 && item.is_published === 1">
              <div class="portfolio">
                <img :src="'https://new.joie.com.ua/storage/' + item.image">
                <span>
                  <a class="magic-hover magic-hover__square" target="_blank" :href="'http://' + item.link"
                    rel="noopener noreferrer">{{ item.link }}</a>
                  <p v-if="lang === 'ua'">{{ item.title_ua }}</p>
                  <p v-if="lang === 'ru'">{{ item.title_ru }}</p>
                  <p v-if="lang === 'en'">{{ item.title_en }}</p>
                </span>
              </div>
            </template>
          </template>



          <div class="portfolio">
            <b class="banak" v-html="pages.id10 && pages.id10['text_' + lang]"></b>
          </div>

        </div>
      </div>
    </section>






    <section id="we-are">

      <span class="label">WE ARE</span>

      <div class="services">

        <h2>{{ (pages.id11 && pages.id11['text_' + lang]) || "" }}</h2>
        <p>{{ (pages.id12 && pages.id12['text_' + lang]) || "" }}</p>

        <span class="wow fadeInUp">
          <div class="a"><img src="/src/assets/images/y1.png">
            <span v-html="pages.id13 && pages.id13['text_' + lang]"></span>
            <a class="readmore" href="/home-ua/poslygi/rozrobka-saity/">{{ (pages.id20 && pages.id20['text_' + lang]) ||
            ""
            }}</a>
          </div>

          <div class="a"><img src="/src/assets/images/y2.png">
            <span v-html="pages.id14 && pages.id14['text_' + lang]"></span>
            <a class="readmore" href="/home-ua/poslygi/razrabotka-landing-page/">{{ (pages.id20 && pages.id20['text_' +
            lang]) || ""
            }}</a>
          </div>

          <div class="a"><img src="/src/assets/images/y3.png">
            <span v-html="pages.id15 && pages.id15['text_' + lang]"></span>
            <a class="readmore" href="/home-ua/poslygi/rozrobka-internet-magaziny/">{{ (pages.id20 && pages.id20['text_'
            +
            lang]) || ""
            }}</a>
          </div>

          <div class="a"><img src="/src/assets/images/y4.png">
            <span v-html="pages.id16 && pages.id16['text_' + lang]"></span>
            <a class="readmore" href="/home-ua/poslygi/kontexstnaya-reklama/">{{ (pages.id20 && pages.id20['text_' +
            lang]) || ""
            }}</a>
          </div>

          <div class="a"><img src="/src/assets/images/y5.png">
            <span v-html="pages.id17 && pages.id17['text_' + lang]"></span>
            <a class="readmore" href="/home-ua/poslygi/seo-prodvizenie/">{{ (pages.id20 && pages.id20['text_' + lang])
            ||
            ""
            }}</a>
          </div>

          <div class="a"><img src="/src/assets/images/y6.png">
            <span v-html="pages.id18 && pages.id18['text_' + lang]"></span>
            <a class="readmore" href="/home-ua/poslygi/razrabotka-logotipa/">{{ (pages.id20 && pages.id20['text_' +
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



      <div class="benefits">

        <h2>{{ (pages.id21 && pages.id21['text_' + lang]) || "" }}</h2>

        <div class="team">
          <span class="wow fadeIn" data-wow-delay="1.0s">
            <img data-src="" src="/src/assets/images/alex.png">
            <span v-html="pages.id22 && pages.id22['text_' + lang]"></span>
          </span>
          <span class="wow fadeIn" data-wow-delay="1.2s">
            <img data-src="" src="/src/assets/images/John.png">
            <span v-html="pages.id23 && pages.id23['text_' + lang]"></span>
          </span>
          <span class="wow fadeIn" data-wow-delay="1.4s">
            <img data-src="" src="/src/assets/images/kolya.png">
            <span v-html="pages.id24 && pages.id24['text_' + lang]"></span>
          </span>
          <span class="wow fadeIn" data-wow-delay="1.6s">
            <img data-src="" src="/src/assets/images/Lee.png">
            <span v-html="pages.id25 && pages.id25['text_' + lang]"></span>
          </span>
          <span class="wow fadeIn" data-wow-delay="1.8s">
            <img data-src="" src="/src/assets/images/Maxim.png">
            <span v-html="pages.id26 && pages.id26['text_' + lang]"></span>
          </span>
          <span class="wow fadeIn" data-wow-delay="2.0s">
            <img data-src="" src="/src/assets/images/tanya.png">
            <span v-html="pages.id27 && pages.id27['text_' + lang]"></span>
          </span>
        </div>
      </div>


      <div class="benerfits">
        <div class="benefits__element wow fadeIn" data-wow-delay="1.0s">
          <p class="benefits__number">174</p>
          <p class="benefits__title"> <span v-html="pages.id28 && pages.id28['text_' + lang]"></span></p>
        </div>
        <div class="benefits__element wow fadeIn" data-wow-delay="1.2s">
          <p class="benefits__number">27</p>
          <p class="benefits__title"> <span v-html="pages.id29 && pages.id29['text_' + lang]"></span></p>
        </div>
        <div class="benefits__element wow fadeIn" data-wow-delay="1.4s">
          <p class="benefits__number">330</p>
          <p class="benefits__title"> <span v-html="pages.id30 && pages.id30['text_' + lang]"></span></p>
        </div>
        <div class="benefits__element wow fadeIn" data-wow-delay="1.6s">
          <p class="benefits__number">6</p>
          <p class="benefits__title"> <span v-html="pages.id31 && pages.id31['text_' + lang]"></span></p>
        </div>
        <div class="benefits__element wow fadeIn" data-wow-delay="1.8s">
          <p class="benefits__number">8</p>
          <p class="benefits__title"> <span v-html="pages.id32 && pages.id32['text_' + lang]"></span></p>
        </div>
        <div class="benefits__element wow fadeIn" data-wow-delay="2.0s">
          <p class="benefits__number">15</p>
          <p class="benefits__title"> <span v-html="pages.id33 && pages.id33['text_' + lang]"></span></p>
        </div>
      </div>



      <span v-html="pages.id34 && pages.id34['text_' + lang]"></span>

    </section>


    <span v-html="pages.id35 && pages.id35['text_' + lang]"></span>

    <section id="sect6" class=""> <span class="label">PRICE</span>
      <div id="prices" class="prices-home">
        <span v-html="pages.id36 && pages.id36['text_' + lang]"></span>

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

    <span v-html="pages.id37 && pages.id37['text_' + lang]"></span>

    <span v-html="pages.id38 && pages.id38['text_' + lang]"></span>






  </div>
</template>



  
