import { createRouter, createWebHistory } from 'vue-router'




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
      path: '/portfolio/:lang?',
      name: 'joie-portfolio',
      component: () => import('../views/joie-portfolio.vue'),
      props: true,
    },
    {
      path: '/calculator/:lang?',
      name: 'joie-calculator',
      component: () => import('../views/joie-calculator.vue'),
      props: true,
    }
  ]
});

export default router




