require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DesignersPlatforms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js'
      },
      {
        src:'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js'
      },
      {
        src:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/vform',
    '~components/_global', // register global component
    { src: '~/plugins/gmaps', ssr: false } // load google credentials
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/router',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],

  // Auth module configuration (https://auth.nuxtjs.org/schemes/local.html#options)
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/me', method: 'get', propertyName: 'data' }
        },
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL: 'http://designers-platforms.com/api',
    baseUrl: process.env.API_URL

  },

  // Enable CORS errors (https://accidental.dev/avoid-api-communication-headaches-by-using-a-proxy/)
  devServer: {
    // proxy: 'http://designers-platforms.com/api',
    proxy: process.env.API_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
