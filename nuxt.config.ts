export default {
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    'normalize.css/normalize.css',
    '@/assets/scss/base.scss'
  ],
  plugins: [],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  axios: {
    baseURL: '/',
  },

  styleResources: {
    scss: ['@/components/bosons/*.scss']
  },


  build: {
    extractCSS: true
  }
}
