import { createRouter, createWebHistory } from 'vue-router'


const lang = {
  props: ['id'],
}

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'joie-home-ua',
      component: () => import('../views/joie-home.vue'), lang:'ua',
      props: true,
      lang: 'ru' ,
    },
    {
      path: '/ru',
      name: 'joie-home-ru',
      component: () => import('../views/joie-home.vue'),
      props: true,
      lang: 'ru' ,
    },

  ]
});

export default router




