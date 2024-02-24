// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  styleResources: {
    scss: ['~/assets/css/main.scss'],
  },
  css: ['~/assets/css/main.scss'],
  router: {
    linkActiveClass: 'active',
  },
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
