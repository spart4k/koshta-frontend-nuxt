import path from 'path'
import fs from 'fs'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Koshta',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "msapplication-TileColor", content: "#DA532C"},
      { name: "theme-color", content: "#FFFFFF"}

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest', crossorigin: "use-credentials" },
      { rel: 'mask-icon', color: "#5BBAD5", href: '/safari-pinned-tab.svg' }
    ],
    script: [
      { src: '/libs/inobounce.min.js' },
      { src: '/libs/mobile-detect.min.js' }
    ]
  },
  target: 'static',
  loading: false,
  server: {
    port: process.env.PORT || 3080, // default: 3000
    host: '0.0.0.0',
    https: process.env.NODE_ENV !== 'production' ? {
      key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
    } : ''
    // https: true
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '../assets/style/main.scss',
    'animate.css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/vueFlickity.js', ssr: false },
    { src: '~/plugins/owlCarousel.js', ssr: false }
  ],
  components: {
    dirs: [
      '~/components',
      '~/components/@ui',
      '~/components/@logic'
    ]
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module',
    '@fullpage/nuxt-fullpage'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'fullpage-nuxt',
    '@fullpage/nuxt-fullpage',
    '@nuxt/image'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: `https://koshta.c.roky.rocks`,
  },

  styleResources: {
    scss: [
      '~/assets/style/_variables.scss'
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
