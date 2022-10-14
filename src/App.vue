<script setup>
import { createRouter, createWebHistory } from 'vue-router'
import { RouterLink } from 'vue-router'
import { startBrain } from './assets/js/brain.js'
import { startCursor } from './assets/js/cursor.js'
import { startMain } from './assets/js/main.js'
import { ref, onMounted } from 'vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './views/joie-footer.vue'
import Header from './views/joie-header.vue'
import Brain from './views/brain.vue'

const route = useRoute()
const lang = ref(route.params.lang)


if (lang.value != '') {
  document.body.classList.add(lang.value)
}

if (lang.value === '') {
  lang.value = 'ua';
  localStorage.setItem('lang', 'ua');
  document.body.classList.add('ua');
  document.body.classList.add(lang.value)
}


onMounted(() => {
  startBrain();
  startMain();
  startCursor();
})

/* Следит за изменениями параметров роута и вообще всех параметров которые сюда запишешь*/

watch(() => route.params, async (toParams, previousParams) => {

  lang.value = toParams.lang ? toParams.lang : 'ua';
  localStorage.setItem('lang', lang.value)
  document.body.classList.remove('ua', 'ru', 'en')
  document.body.classList.add(lang.value)

  document.body.classList.add('brain-mute')
  function brain_mute() {
    document.body.classList.remove('brain-mute')
  }
  setTimeout(brain_mute, 1000);

  
})



</script>




<template>
  <Header />
  <Brain />

  <router-view v-slot="{ Component, route }">
    <Transition name="slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>

  <Footer />
</template>



<style>
.slide-move,
.slide-enter-active,
.slide-leave-active {
  opacity: 1;
  transition: 1.4s;
}

/* 2. declare enter from and leave to state */
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transition: 0.4s;
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.slide-leave-active {
    opacity: 0;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: 1.2s;
  transform: scale(1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: 1.2s;
  transform: scale(0.8);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
    opacity: 0;
    width: 26%;
    float:none;
    position: absolute!important;
    transform: scale(0.1);
    z-index: -1;

}

</style>