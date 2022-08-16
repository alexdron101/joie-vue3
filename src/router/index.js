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
      component: () => import('../views/joie-home.vue'),
      props: true,
    },
    {
      path: '/ru',
      name: 'joie-home-ru',
      component: () => import('../views/joie-home.vue'),
      props: true,
    },

  ]
});

export default router




