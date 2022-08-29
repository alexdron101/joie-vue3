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
      meta: { enterClass:'animate__animated fadeInLeft', leaveClass:'animate__animated fadeOutLeft', },
      props: true,
    
    },
    {
      path: '/portfolio/:lang?',
      name: 'joie-portfolio',
      component: () => import('../views/joie-portfolio.vue'),
      meta: { enterClass:'animate__animated fadeInLeft', leaveClass:'animate__animated fadeOutLeft', },
      props: true,
    
    }
  ]
});

export default router




