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
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>

  <Footer />
</template>



<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-leave-to {
  transition: 0.8s;
  opacity: 0;
  position: absolute !important;
  display: none!important;
}

.fade-leave-active {
  transition: 0.8s;
  opacity: 0;
}

.fade-enter-active {
  transition: 0.8s;
  opacity: 0;
}

.fade-enter-to {
  transition: 2.4s;
  opacity: 1;
}
</style>