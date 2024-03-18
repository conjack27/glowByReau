// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  styleResources: {
    scss: ['/assets/css/main.scss', '~/assets/css/fuckyou.scss'],
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  css: ['~/assets/css/main.scss'],
  router: {
    linkActiveClass: 'active',
  },
  routes: [
    {
      name: 'home',
      path: '/',
      component: '~/pages/index.vue',
    },
    {
      name: 'behandelingen',
      path: '/behandelingen/:section?',
      component: '~/pages/behandelingen.vue',
    },
    {
      name: 'contact',
      path: '/contact',
      component: '~/pages/contact.vue',
    },
    {
      name: 'about',
      path: '/about',
      component: '~/pages/about.vue',
    },
    {
      name: 'producten',
      path: '/producten',
      component: '~/pages/producten.vue',
    },
  ],
  googleFonts: {
    families: {
      Georgia: true,
      'Josefin+Sans': true,
      Roboto: [300, 500, 700],
      Nunito: true,
      'Nunito Extra Light': true,
    },
  },
});
