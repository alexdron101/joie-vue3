import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', redirect: '/ua' },
    {
      path: '/', redirect: '/ua',
      name: 'joie-home-ua',
      component: () => import('../views/joie-home.vue'),
      props: true,
      meta: {
        title_ua: 'Головна - Веб студiя joie',
        title_ru: 'Главная - Веб студия joie',
        title_en: 'Home - joie web agency'
      }
    },
    {
      path: '/:lang?',
      name: 'joie-home-ua',
      component: () => import('../views/joie-home.vue'),
      props: true,
      meta: {
        title_ua: 'Головна - Веб студiя joie',
        title_ru: 'Главная - Веб студия joie',
        title_en: 'Home - joie web agency'
      }
    },
    {
      path: '/portfolio/:lang?',
      name: 'joie-portfolio',
      component: () => import('../views/joie-portfolio.vue'),
      props: true,
      meta: {
        title_ua: 'Портфолiо - Веб студiя joie',
        title_ru: 'Портфолио - Веб студия joie',
        title_en: 'Portfolio - joie web agency'
      }
    },
    {
      path: '/calculator/:lang?',
      name: 'joie-calculator',
      component: () => import('../views/joie-calculator.vue'),
      props: true,
      meta: {
        title_ua: 'Калькулятор - Веб студiя joie',
        title_ru: 'Калькулятор - Веб студия joie',
        title_en: 'Cost calculator - joie web agency'
      }
    },
    {
      path: '/services/:lang?',
      name: 'joie-services',
      component: () => import('../views/joie-services.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/services/ads/:lang?',
      name: 'joie-services-ads',
      component: () => import('../views/joie-services-ads.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/services/brand/:lang?',
      name: 'joie-services-brand',
      component: () => import('../views/joie-services-brand.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/services/ecommerce/:lang?',
      name: 'joie-services-ecommerce',
      component: () => import('../views/joie-services-ecommerce.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/services/landing-page/:lang?',
      name: 'joie-services-landing-page',
      component: () => import('../views/joie-services-landing-page.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/services/logo/:lang?',
      name: 'joie-services-logo',
      component: () => import('../views/joie-services-logo.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/services/seo/:lang?',
      name: 'joie-services-seo',
      component: () => import('../views/joie-services-seo.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/services/website/:lang?',
      name: 'joie-services-website',
      component: () => import('../views/joie-services-website.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/reviews/:lang?',
      name: 'joie-reviews',
      component: () => import('../views/joie-reviews.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    },
    {
      path: '/contacts/:lang?',
      name: 'joie-contacts',
      component: () => import('../views/joie-contacts.vue'),
      props: true,
      meta: {
        title_ua: 'Послуги - Веб студiя joie',
        title_ru: 'Услуги - Веб студия joie',
        title_en: 'Services - joie web agency'
      }
    }
  ]
});



router.beforeEach((to, from, next) => {
  const langt = to.params.lang
  document.title = `${to.meta['title_' + langt]}`;
  next();
  if (langt === '') {
    document.title = `${to.meta.title_ua}`;
  }
});

export default router




