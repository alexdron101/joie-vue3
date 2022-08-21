import { createRouter, createWebHistory } from 'vue-router'


// const lang = {
//   props: ['id'],
// }

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/:lang?',
      name: 'joie-home-ua',
      component: () => import('../views/joie-home.vue'),
      props: true,
    
    },
    {
      path: '/ru/:lang=ru',
      name: 'joie-home-ru',
      component: () => import('../views/joie-home_ru.vue'),
      props: true,
    
    }

  ]
});

export default router




