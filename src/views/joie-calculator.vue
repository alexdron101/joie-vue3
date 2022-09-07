<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { startCursor } from '../assets/js/cursor.js'
import '../assets/ui.css';
import axios from 'axios';
import ElementPlus from 'element-plus';
import { ElButton, ElRow, ElSlider, ElCheckbox, ElCol } from 'element-plus'
import 'element-plus/dist/index.css'


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
                            <b>От {{totalPrice}} грн</b>
                        </a>
                        <a>
                            <h1>Срок выполнения</h1>
                            <b>От {{totalDays}} дней</b>
                        </a>
                    </span>
                </div>

            </div>
        </section>

    </div>
</template>

<script>


export default {
    data() {
        return {
            myHead: [],
            checked1: true,
            myCalc: [],
            current: [],
            currentTitle: "",
            totalPrice: 0,
            totalDays: 0,
            activeClass: "non"
        };
    },


    mounted() {
        axios
            .get("/src/assets/js/HeadData.json")
            .then(response => {
                this.myHead = response.data;
            })
            .catch(err => {
                alert(err);
            });

        axios
            .get("/src/assets/js/CalcData.json")
            .then(response => {
                this.myCalc = response.data;
                this.current = this.myCalc["Site"];
                this.currentTitle = "Розробка сайту";
                this.activeClass = "active";
            })
            .catch(err => {
                alert(err);
            });
    },
    methods: {
        setCurrent(typ, title, current_index) {
            this.current = this.myCalc[typ];
            this.currentTitle = title;
            this.myHead[1].forEach(function (element) {
                element.isActive = false;
            });
            this.myHead[1][current_index].isActive = true;
        },
        calcPrice() {
            //window.console.log("calcPrice", 1);
            let t = 0;
            let y = 0;
            let y99 = 0;
            let t99 = 0;
            for (let i = 0; i < this.current.length; i++) {
                if (this.current[i].position) {
                    if (this.current[i].related_calculation) {
                        let formula = this.current[i].related_calculation;

                        let arr_formula = formula.split('.');//"related_calculation":"price*design.result"

                        let name = arr_formula[0]; // "design"
                        let name_field = arr_formula[1]; // result

                        this.current.forEach(function (element) {
                            if (element.name === name) {
                                t = element[name_field];
                                window.console.log("t=", name, name_field, t);
                            };
                        });
                        t99 = this.current[i].position * this.current[i].price * t;


                    } else {

                        t99 = this.current[i].position * this.current[i].price;
                    }
                    window.console.log("t99=", t99);

                    window.console.log("result=", this.current[i].result);
                    y99 = this.current[i].position * this.current[i].days;
                } else { t99 = 0; }
                this.current[i].result = t99;
            }
            var totalPrice = 0;
            var totalDays = 0;

            this.current.forEach(function (element) {
                window.console.log("element=", element);
                totalPrice = totalPrice + element.result;
                window.console.log("totalPrice=", totalPrice);
                totalDays = totalDays + element.days * element.position;
            });
            this.totalPrice = totalPrice;
            this.totalDays = totalDays;

        }
    },
    watch: {
        current: function () {
            this.calcPrice();
        }
    }
}

</script>
