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
     //params: {lang: 'ua' }
    
    },
  
    // {
    //   path: '/',
    //   name: 'joie-home-ru',
    //   component: () => import('../views/joie-home.vue'),
    //   props: true,
    //   params: {lang: 'ru' },
    // },

  ]
});

export default router




