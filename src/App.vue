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
.fade-leave-to {
  transition: 0.4s;
  opacity: 1;
}

.fade-leave-active {
  transition: 0.4s;
  opacity: 0;
}

.fade-enter-active {
  transition: 0.4s;
  opacity: 0;
}

.fade-enter-to {
  transition: 2.4s;
  opacity: 1;
}
</style>