export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kamnakis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  router: {
    base: '/kamnakis/'
  },

  server: {
    host: '0.0.0.0', // default: localhost
    port: 8080
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    '@nuxtjs/fontawesome'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: [
        'faBars',
        'faTimes',
        'faHome',
        'faUserNinja',
        'faBriefcase',
        'faAddressCard',
        'faEnvelope',
        'faChevronCircleRight',
        'faChevronCircleLeft',
        'faGlobe'
      ],
      brands: [
        'faGithub',
        'faLinkedin'
      ]
    }
  }
}
