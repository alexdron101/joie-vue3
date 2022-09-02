<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { startCursor } from '../assets/js/cursor.js'
import { reactive, computed } from 'vue'


const works = ref([])
const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')
const currentFilter = ref('all')



const filtered_works = computed(() => {
  return works.value.filter((item) => item.is_all_works === 1 || item.is_is_published === 1)  
})



function setFilter() {
  alert('ss');
  filtered_works = computed(() => {
  return works.value.filter((item) => item.is_all_works === 1 || item.is_is_published === 1)  
})
  console.log(filtered_works);
}




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
    
  
    
    
    
    <template>

  <div>


    <div>
      <div class="home-banner small" id="top-block">

        <h1>JOIE WEB AGENCY</h1>
        <h2>
          <template v-if="lang === 'ua'">Наше <br>портфолiо</template>
          <template v-if="lang === 'ru'">Наше<br>Портфолио</template>
          <template v-if="lang === 'en'">Our<br>Portfolio</template>
        </h2>

        <div class="span"><span id="typed-en"></span><span class="typed-cursor"></span></div>

        <a class="a23 magic-hover magic-hover__square forma-up">
          <template v-if="lang === 'ua'"><span>Залишити заявку</span></template>
          <template v-if="lang === 'ru'"><span>Оставить заявку</span></template>
          <template v-if="lang === 'en'"><span>Gat a quote</span></template>
        </a>




        <a href="#first-block" class="scrollto first-a-scroll"><b></b></a>
      </div>
    </div>


    <section id="work">




      <div id="first-block" class="lust-works portfolio all-works">

        <span class="label">WORKS</span>

        <ul id="filters">
          <li><span class="filter" v-bind:class="{ active: currentFilter === 'all' }" @click="setFilter('all')">Всі</span></li>
          <li><span class="filter" v-bind:class="{ active: currentFilter === 'visitka' }" @click="setFilter('visitka')">Сайт візитівка</span></li>
          <li><span class="filter" v-bind:class="{ active: currentFilter === 'korporate' }" @click="setFilter('korporate')">Корпоративний сайт</span></li>
          <li><span class="filter" v-bind:class="{ active: currentFilter === 'landing' }" @click="setFilter('landing')">Landing page</span></li>
          <li><span class="filter" v-bind:class="{ active: currentFilter === 'shop' }" @click="setFilter('shop')">Інтернет магазин</span></li>
          <li><span class="filter" v-bind:class="{ active: currentFilter === 'catalog' }" @click="setFilter('catalog')">Сайт каталог</span></li>
        </ul>

        <div id="portfoliolist" class="portfolio-area">



          <template v-for="item in filtered_works" :key="item.weight">

            <div class="portfolio">
              <img :src="'https://new.joie.com.ua/storage/' + item.image">
              <span>
                <a target="_blank" :href="'http://' + item.link" rel="noopener noreferrer">{{  item.link  }}</a>
                <p v-if="lang === 'ua'">{{  item.title_ua  }}</p>
                <p v-if="lang === 'ru'">{{  item.title_ru  }}</p>
                <p v-if="lang === 'en'">{{  item.title_en  }}</p>
              </span>
            </div>

          </template>





        </div>
      </div>
    </section>





  </div>


</template>



    