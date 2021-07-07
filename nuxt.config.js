import getRoutes from './utils/getRoutes'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DavidWeb',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Cookie&family=Monoton&family=Open+Sans&family=Press+Start+2P&display=swap" rel="stylesheet',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Material+Icons',
        rel: 'stylesheet',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Material+Icons+Outlined',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Material+Icons+Round',
        rel: 'stylesheet',
      },
      /* {
        href: 'https://fonts.googleapis.com/css2?family=Material+Icons+Sharp',
        rel: 'stylesheet',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Material+Icons+Two+Tone',
        rel: 'stylesheet',
      }, */
    ],
    // script: [{ src: 'https://d3js.org/d3.v6.min.js' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/Light-dark-themes.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/Footer',
      '~/components/Timeline',
      '~/components/DynamicLine',
      '~/components/Articles',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/es/
    'nuxt-i18n',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // https://www.npmjs.com/package/vue-scrollto
    // ['vue-scrollto/nuxt', { duration: 300, easing: 'ease-out' }],
  ],

  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true,
    /* components: [
      'BIcon',
      'BIconPerson',
      'BIconFolder',
      'BIconInfoCircle',
      'BIconTelephone',
      'BIconDot',
      'BIconDash',
      'BIconArrowLeft',
      'BIconArrowRight',
      'BIconGithub',
      'BIconLinkedin',
      'BIconInstagram',
      'BIconGlobe',
      'BIconExclamationCircle',
    ], */
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Nicholas David PWA',
    },
    icon: {
      fileName: 'favicon.png',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { compact: true },
  },

  generate: {
    dir: '../NginxServer/dist',
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env/
  env: {
    port: process.env.PORT || 443,
    host: process.env.HOST || 'www.nicholas-david.com',
    baseUrl: process.env.BASE_URL || 'https://www.nicholas-david.com',
  },

  /*
   ** For deployment you might want to edit host and port
   */
  // server: {
  //   port: process.env.PORT || 443,
  //   host: process.env.HOST || 'localhost',
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, './utils/localhost.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, './utils/localhost.crt')),
  //   },
  // },

  // Router opts: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router/
  router: {},

  // https://i18n.nuxtjs.org/es/options-reference
  i18n: {
    locales: [
      { code: 'es', iso: 'es-CO', file: 'es.js', name: 'ES' },
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'EN' },
      // { code: 'fr', iso: 'fr-FR', file: 'fr.js', name: 'FR' },
    ],
    defaultLocale: 'en',
    langDir: '~/assets/js/lang/',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    seo: false,
  },

  sitemap: {
    hostname: process.env.BASE_URL || 'https://www.nicholas-david.com',
    routes() {
      return getRoutes()
    },
  },
}
