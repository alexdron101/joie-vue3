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
    startCursor();
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
            <div class="span">
          <p>Web joie is <span class="typed-text"></span><span class="cursore">&nbsp;</span></p>
        </div>
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
      <template v-if="lang === 'ua'">
        <RouterLink to="/services/website/ua">Детальнiше</RouterLink>
      </template>
      <template v-if="lang === 'ru'">
        <RouterLink to="/services/website/ru">Подробнее</RouterLink>
      </template>
      <template v-if="lang === 'en'">
        <RouterLink to="/services/website/en">Ream more</RouterLink>
      </template>
    </div>

    <div class="a"><img src="/src/assets/images/y2.png">
      <span v-html="pages.id14 && pages.id14['text_' + lang]"></span>
      <template v-if="lang === 'ua'">
        <RouterLink to="/services/landing-page/ua">Детальнiше</RouterLink>
      </template>
      <template v-if="lang === 'ru'">
        <RouterLink to="/services/landing-page/ru">Подробнее</RouterLink>
      </template>
      <template v-if="lang === 'en'">
        <RouterLink to="/services/landing-page/en">Ream more</RouterLink>
      </template>
    </div>

    <div class="a"><img src="/src/assets/images/y3.png">
      <span v-html="pages.id15 && pages.id15['text_' + lang]"></span>
      <template v-if="lang === 'ua'">
        <RouterLink to="/services/ecommerce/ua">Детальнiше</RouterLink>
      </template>
      <template v-if="lang === 'ru'">
        <RouterLink to="/services/ecommerce/ru">Подробнее</RouterLink>
      </template>
      <template v-if="lang === 'en'">
        <RouterLink to="/services/ecommerce/en">Ream more</RouterLink>
      </template>
    </div>

    <div class="a"><img src="/src/assets/images/y4.png">
      <span v-html="pages.id16 && pages.id16['text_' + lang]"></span>
      <template v-if="lang === 'ua'">
        <RouterLink to="/services/ads/ua">Детальнiше</RouterLink>
      </template>
      <template v-if="lang === 'ru'">
        <RouterLink to="/services/ads/ru">Подробнее</RouterLink>
      </template>
      <template v-if="lang === 'en'">
        <RouterLink to="/services/ads/en">Ream more</RouterLink>
      </template>
    </div>

    <div class="a"><img src="/src/assets/images/y5.png">
      <span v-html="pages.id17 && pages.id17['text_' + lang]"></span>
      <template v-if="lang === 'ua'">
        <RouterLink to="/services/seo/ua">Детальнiше</RouterLink>
      </template>
      <template v-if="lang === 'ru'">
        <RouterLink to="/services/seo/ru">Подробнее</RouterLink>
      </template>
      <template v-if="lang === 'en'">
        <RouterLink to="/services/seo/en">Ream more</RouterLink>
      </template>
    </div>

    <div class="a"><img src="/src/assets/images/y6.png">
      <span v-html="pages.id18 && pages.id18['text_' + lang]"></span>
      <template v-if="lang === 'ua'">
        <RouterLink to="/services/logo/ua">Детальнiше</RouterLink>
      </template>
      <template v-if="lang === 'ru'">
        <RouterLink to="/services/logo/ru">Подробнее</RouterLink>
      </template>
      <template v-if="lang === 'en'">
        <RouterLink to="/services/logo/en">Ream more</RouterLink>
      </template>
    </div>

    <div class="a"><img src="/src/assets/images/y7.png">
      <span v-html="pages.id19 && pages.id19['text_' + lang]"></span>
      <template v-if="lang === 'ua'">
        <RouterLink to="/services/brand/ua">Детальнiше</RouterLink>
      </template>
      <template v-if="lang === 'ru'">
        <RouterLink to="/services/brand/ru">Подробнее</RouterLink>
      </template>
      <template v-if="lang === 'en'">
        <RouterLink to="/services/brand/en">Ream more</RouterLink>
      </template>
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



<div id="about-us">
  <span v-html="pages.id39 && pages.id39['text_' + lang]"></span>
  <div>
    <span class="span wow fadeInUp">
      <span v-html="pages.id40 && pages.id40['text_' + lang]"></span>
    </span>
    <span>
      <span v-html="pages.id41 && pages.id41['text_' + lang]"></span>
      <a class="forma-up a23">
        <template v-if="lang === 'ua'"><span>Обговорити проект</span></template>
        <template v-if="lang === 'ru'"><span>Обсудить проект</span></template>
        <template v-if="lang === 'en'"><span>Discuss Project</span></template>
      </a>
    </span>
  </div>
</div>


</section>





    </div>
</template>
    
    
    
      
    