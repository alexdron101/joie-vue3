<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'


const works = ref(0)
const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')

watch(() => route.params, async (toParams, previousParams) => {
  lang.value = toParams.lang ? toParams.lang : 'ua';
})


onMounted(() => {

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
          <template v-if="lang === 'ua'">Наше <br>портфлiо</template>
          <template v-if="lang === 'ru'">Наше<br>Портфолио</template>
          <template v-if="lang === 'en'">Our<br>Portfolio</template>
        </h2>

        <div class="span"><span id="typed-en"></span><span class="typed-cursor"></span></div>

        <a class="a23 magic-hover magic-hover__square forma-up">
          <template v-if="lang === 'ua'">Залишити заявку</template>
          <template v-if="lang === 'ru'">Оставить заявку</template>
          <template v-if="lang === 'en'">Gat a quote</template>
        </a>




        <a href="#work" class="scrollto first-a-scroll"><b></b></a>
      </div>
    </div>


    <section id="work">



      <div id="first-block" class="lust-works">

        <span class="label">WORKS</span>
        <h2></h2>

        <div id="portfoliolist" class="portfolio-area">



          <template v-for="item in works" :key="item.weight">
            <template v-if="item.is_all_works === 1 && item.is_published === 1">
              <div class="portfolio">
                <img :src="'https://new.joie.com.ua/storage/' + item.image">
                <span>
                  <a target="_blank" :href="'http://' + item.link" rel="noopener noreferrer">{{ item.link }}</a>
                  <p v-if="lang === 'ua'">{{ item.title_ua }}</p>
                  <p v-if="lang === 'ru'">{{ item.title_ru }}</p>
                  <p v-if="lang === 'en'">{{ item.title_en }}</p>
                </span>
              </div>
            </template>
          </template>





        </div>
      </div>
    </section>





  </div>
</template>
    
    
    
      
    