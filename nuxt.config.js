import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - wafood-failover',
    title: 'wafood-failover',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#2e7d32",
          secondary: "#C5E1A5",
          cake: "#FF9800",
          restaurant: "#CDDC39",
          recipe: "#03A9F4",
          comment: "#e9ebee"
        },
      },
    },
  },

  i18n: {
    locales: [
      {
        name: "Français",
        code: "fr",
        iso: "fr-FR",
        file: "fr.json",
        flag: "fr"
      },
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.json",
        flag: "gbr"
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    },
    lazy: true,
    langDir: "lang/",
    defaultLocale: "fr"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
