<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { startCursor } from '../assets/js/cursor.js'
import { axios_min } from '../assets/js/axios.min.js'
import { element_ui } from '../assets/js/element-ui.js'
import '../assets/ui.css';





const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')


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

    /* START CALC */

    /*END CALC*/

})


</script>


      
      
      
      
<template>

    <div>

        <div class="home-banner small" id="top-block">
            <h1>JOIE WEB AGENCY</h1>
            <h2>
                <template v-if="lang === 'ua'">Калькулятор</template>
                <template v-if="lang === 'ru'">Калькулятор</template>
                <template v-if="lang === 'en'">Calculator</template>
            </h2>
            <div class="span"><span id="typed-en"></span><span class="typed-cursor"></span></div>
            <a class="a23 magic-hover magic-hover__square forma-up">
                <template v-if="lang === 'ua'"><span>Залишити заявку</span></template>
                <template v-if="lang === 'ru'"><span>Оставить заявку</span></template>
                <template v-if="lang === 'en'"><span>Gat a quote</span></template>
            </a>
            <a href="#first-block" class="scrollto first-a-scroll"><b></b></a>
        </div>


        
        <section id="sect1">
            <div id="el5">
                <div id="app_calc">

                    <h2>Калькулятор стоимости</h2>
                    <p>Рассчитайте ориентировочную стоимость работ</p>

                    <el-row>
                        <el-col :span="24">
                            <el-button v-for="(arrhead, i) in this.myHead['1']" :key="i"
                                @click="setCurrent(arrhead.NameOfCalcData,arrhead.Title,i)" type="primary" plain
                                v-bind:icon="arrhead.icon" v-bind:class="{active:arrhead.isActive}">{{arrhead.Title}}
                            </el-button>
                        </el-col>
                    </el-row>
                    <br />
                    <h4>{{currentTitle}}:</h4>
                    <el-row v-for="(arr, index7) in this.current" :key="index7">
                        <div class="block" v-if="arr.typ==='slider'">
                            <span class="demonstration">{{arr.title}}</span>
                            <el-slider @change="calcPrice()" v-model="arr.position" :step="arr.step" :min="arr.min"
                                :max="arr.max" v-bind:name="arr.name" :show-tooltip="false" show-stops
                                :marks="arr.marks"></el-slider>
                        </div>
                        <div class="blockc" v-if="arr.typ==='checkbox'">
                            <el-checkbox @change="calcPrice()" v-model="arr.position" v-bind:label="arr.title" border>
                            </el-checkbox>
                        </div>
                    </el-row>

                    <span id="result" class="" data-wow-delay="0s">
                        <a>
                            <h1>Ориентировочная стоимость</h1>
                            <bold>От {{totalPrice}} грн</bold>
                        </a>
                        <a>
                            <h1>Срок выполнения</h1>
                            <bold>От {{totalDays}} дней</bold>
                        </a>
                    </span>
                </div>

            </div>
        </section>

    </div>
</template>
