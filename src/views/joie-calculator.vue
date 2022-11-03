<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { startCursor } from '../assets/js/cursor.js'
import '../assets/ui.css';
import { ElButton, ElRow, ElSlider, ElCheckbox, ElCol } from 'element-plus'
import { reactive, computed } from 'vue'


const route = useRoute()
const lang = ref(route.params.lang ? route.params.lang : 'ua')

const pages = ref(0)
const myHead = ref([])
const checked1 = ref(true)
const myCalc = ref([])
const current = ref([])
const currentTitle = ref()
const totalPrice = ref(0)
const totalDays = ref(0)
const activeClass = ref('non')
const current_index = ref(0)
const langIndex = { 'ua': 0, 'ru': 1, 'en': 2 }
const marks_a = (obj, l) => {
    const arr = Object.values(obj);
    return arr.map(item => item[langIndex[l]])

}

fetch('https://new.joie.com.ua/api/get-page-home')
    .then(response => response.json())
    .then(data => {
        let formatedData = {};
        data.forEach(it => {
            formatedData['id' + it.id] = it;
        });
        pages.value = formatedData;
    });

function setCurrent(index) {
    current.value = myCalc.value[myHead.value[1][index]['NameOfCalcData']];
    currentTitle.value = myHead.value[1][index]['Title_' + lang.value];
    myHead.value[1].forEach(function (element) {
        element.isActive = false;
    });
    myHead.value[1][index].isActive = true;
    current_index.value = index;
}


function calcPrice() {
    //window.console.log("calcPrice", 1);
    let t = 0;
    let y = 0;
    let y99 = 0;
    let t99 = 0;
    for (let i = 0; i < current.value.length; i++) {
        if (current.value[i].position) {
            if (current.value[i].related_calculation) {
                let formula = current.value[i].related_calculation;

                let arr_formula = formula.split('.');//"related_calculation":"price*design.result"

                let name = arr_formula[0]; // "design"
                let name_field = arr_formula[1]; // result

                current.value.forEach(function (element) {
                    if (element.name === name) {
                        t = element[name_field];
                        // window.console.log("t=", name, name_field, t);
                    };
                });
                t99 = current.value[i].position * current.value[i].price * t;


            } else {

                t99 = current.value[i].position * current.value[i].price;
            }
            //window.console.log("t99=", t99);

            //window.console.log("result=", current.value[i].result);
            y99 = current.value[i].position * current.value[i].days;
        } else { t99 = 0; }
        current.value[i].result = t99;
    }

    var totalPriceA = 0;
    var totalDaysA = 0;

    current.value.forEach(function (element) {
        //window.console.log("element=", element);
        totalPriceA = totalPriceA + element.result;
        //window.console.log("totalPrice=", totalPrice);
        totalDaysA = totalDaysA + element.days * element.position;
    });
    totalPrice.value = totalPriceA;
    totalDays.value = totalDaysA;

}

function setFilter(arg) { currentFilter.value = arg; }

watch(() => route.params, async (toParams, previousParams) => {
    lang.value = toParams.lang ? toParams.lang : 'ua';
    setCurrent(current_index.value);
})

watch(() => current, () => {
    calcPrice();
})



onMounted(() => {

    fetch('/src/assets/js/HeadData.json')
        .then(response => response.json())
        .then(data => {
            myHead.value = data;
        })



    fetch("/src/assets/js/CalcData.json")
        .then(response => response.json())
        .then(data => {
            myCalc.value = data;
            current.value = myCalc.value["Site"];
            currentTitle.value = myHead.value[1][0]['Title_' + lang.value];
            activeClass.value = "active";
        })


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



        <section id="sect1">
            <div id="el5">
                <div id="app_calc">

                    <h2>
                        <template v-if="lang === 'ua'"><span>Калькулятор вартості</span></template>
                        <template v-if="lang === 'ru'"><span>Калькулятор стоимости</span></template>
                        <template v-if="lang === 'en'"><span>Cost calculator</span></template>
                    </h2>
                    <p>
                        <template v-if="lang === 'ua'"><span>Розрахуйте орієнтовну вартість робіт</span></template>
                        <template v-if="lang === 'ru'"><span>Рассчитайте ориентировочную стоимость
                                работ</span></template>
                        <template v-if="lang === 'en'"><span>Calculate the estimated cost of work</span></template>
                    </p>

                    <el-row>
                        <el-col :span="24">
                            <el-button v-for="(arrhead, i) in myHead['1']" :key="i" @click="setCurrent(i)"
                                type="primary" plain v-bind:icon="arrhead.icon"
                                v-bind:class="{active:arrhead.isActive}">
                                {{arrhead[`Title_${lang}`]}}
                            </el-button>
                        </el-col>
                    </el-row>
                    <br />
                    <h4>{{currentTitle}}:</h4>
                    <el-row v-for="(arr, index7) in current" :key="index7">
                        <div class="block" v-if="arr.typ==='slider'">

                            <template v-if="lang === 'ua'"><span
                                    class="demonstration">{{arr.title[0]}}</span></template>
                            <template v-if="lang === 'ru'"><span
                                    class="demonstration">{{arr.title[1]}}</span></template>
                            <template v-if="lang === 'en'"><span
                                    class="demonstration">{{arr.title[2]}}</span></template>

                            <el-slider @change="calcPrice()" v-model="arr.position" :step="arr.step" :min="arr.min"
                                :max="arr.max" v-bind:name="arr.name" :show-tooltip="false" show-stops
                                :marks="marks_a(arr.marks, lang)"></el-slider>
                        </div>

                        <div class="blockc" v-if="arr.typ==='checkbox'">
                            <template v-if="lang === 'ua'"><span class="demonstration">
                                    <el-checkbox @change="calcPrice()" v-model="arr.position"
                                        v-bind:label="arr.title[0]" border></el-checkbox>
                                </span></template>
                            <template v-if="lang === 'ru'"><span class="demonstration">
                                    <el-checkbox @change="calcPrice()" v-model="arr.position"
                                        v-bind:label="arr.title[1]" border></el-checkbox>
                                </span></template>
                            <template v-if="lang === 'en'"><span class="demonstration">
                                    <el-checkbox @change="calcPrice()" v-model="arr.position"
                                        v-bind:label="arr.title[2]" border></el-checkbox>
                                </span></template>

                        </div>
                    </el-row>

                    <span id="result" class="" data-wow-delay="0s">
                        <a>
                            <template v-if="lang === 'ua'">
                                <h1>Орієнтовна вартість</h1>
                                <b>Від {{totalPrice}} грн</b>
                            </template>
                            <template v-if="lang === 'ru'">
                                <h1>Ориентировочная стоимость</h1>
                                <b>От {{totalPrice}} грн</b>
                            </template>
                            <template v-if="lang === 'en'">
                                <h1>Estimated cost</h1>
                                <b>From {{totalPrice}} UAH</b>
                            </template>

                        </a>
                        <a>
                            <template v-if="lang === 'ua'">
                                <h1>Термін виконання</h1>
                                <b>Від {{totalDays}} днів</b>
                            </template>
                            <template v-if="lang === 'ru'">
                                <h1>Срок выполнения</h1>
                                <b>От {{totalDays}} дней</b>
                            </template>
                            <template v-if="lang === 'en'">
                                <h1>Due date</h1>
                                <b>From {{totalDays}} days</b>
                            </template>
                        </a>
                    </span>
                </div>

            </div>
        </section>

        <section id="sect6" class=""> <span class="label">PRICE</span>
            <div id="prices" class="prices-home">
                <span v-html="pages.id36 && pages.id36['text_' + lang]"></span>
            </div>
        </section>

    </div>
</template>


