<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { startCursor } from '../assets/js/cursor.js'
import { reactive, computed } from 'vue'


const works = ref([])
const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')
const available_filters = [{
  title_ua: 'Всі',
  title_en: 'All',
  title_ru: 'Все',
  value: 'is_all_works'
}, {
  title_ua: 'Сайт візитівка',
  title_en: 'Card website',
  title_ru: 'Сайт визитка',
  value: 'is_site_visitka_works'
}, {
  title_ua: 'Корпоративний сайт',
  title_en: 'Corporate website',
  title_ru: 'Корпоративный сайт',
  value: 'is_site_korp__works'
}, {
  title_ua: 'Landing page',
  title_en: 'Landing page',
  title_ru: 'Landing page',
  value: 'is_landing_works'
}, {
  title_ua: 'Інтернет магазин',
  title_en: 'Ecommerce',
  title_ru: 'Интернет магазин',
  value: 'is_shop_works'
}, {
  title_ua: 'Сайт каталог',
  title_en: 'Catalog',
  title_ru: 'Сайт каталог',
  value: 'is_portal_works'
}];

const currentFilter = ref('is_all_works')

const filtered_works = computed(() => {
  return works.value.filter((item) => item[currentFilter.value] === 1 || item.is_is_published === 1);
});

function setFilter(arg) { currentFilter.value = arg; }

watch(() => route.params, async (toParams, previousParams) => {
  lang.value = toParams.lang ? toParams.lang : 'ua';
})


onMounted(() => {
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

  document.body.classList.add('page-small')

  /* Начало импорт АПИ*/
  fetch('https://new.joie.com.ua/api/get-works')
    .then(response => response.json())
    .then(data => {
      works.value = Object.keys(data).map((key) => data[key]).sort(function (a, b) { return a.weight - b.weight; });
    });

})

</script>
<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
  
  
  
  
  <template>

  <div>


   
      <div class="home-banner small" id="top-block">

        <h1>JOIE WEB AGENCY</h1>
        <h2>
          <template v-if="lang === 'ua'">Наше <br>портфолiо</template>
          <template v-if="lang === 'ru'">Наше<br>Портфолио</template>
          <template v-if="lang === 'en'">Our<br>Portfolio</template>
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




      <div id="first-block" class="lust-works portfolio all-works">

        <span class="label">WORKS</span>

        <ul id="filters">
          <template v-for="filter in available_filters">
            <li>
              <span class="filter" v-bind:class="{ active: currentFilter === filter.value }"
                @click="setFilter(filter.value)">
                {{ filter[`title_${lang}`] }}
              </span>
            </li>
          </template>
        </ul>


        <div id="portfoliolist" class="portfolio-area">


          <TransitionGroup name="fade">

            <div v-for="item in filtered_works" :key="item.weight" class="portfolio">
              <img :src="'https://new.joie.com.ua/storage/' + item.image">
              <span>
                <a target="_blank" :href="'http://' + item.link" rel="noopener noreferrer">{{ item.link }}</a>
                <p>{{ item[`title_${lang}`] }}</p>
              </span>
            </div>

          </TransitionGroup>




        </div>
      </div>
    </section>





  </div>


</template>
  