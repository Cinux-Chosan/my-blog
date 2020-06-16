import colors from 'vuetify/es5/util/colors'
import globalConfig from '../../config/global.config'
import cert from '../../config/cert'
import path from 'path'
import QnUplaoder from './webpack_plugin/QnUpload'
import { URL } from 'url'

const { serverUrl, serverPort, serverPrefix, fe } = globalConfig
const { publicPathPrefix, publicPathUrl } = fe
const {
  qnConfig: { ak, sk }
} = cert
const resolveDir = dir => path.join(__dirname, dir)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: titleChunk => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Chosan's Home` : "Chosan's Home"
    },
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '前端,Node,Node.js,Vue,JavaScript'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/toastUi.client', ssr: false, mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    prefix: serverPrefix,
    port: serverPort,
    headers: {
      post: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  },

  proxy: {
    [serverPrefix]: `${serverUrl}:${serverPort}`,
    '/sitemap.xml': `${serverUrl}:${serverPort}${serverPrefix}`
  },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.cyan.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  server: {
    host: '0.0.0.0' // default: localhost
  },

  hooks: {
    build: {
      done(builder) {
        const { buildDir } = builder.nuxt.options
        if (process.env.NODE_ENV !== 'production') return
        const qnUplaoder = new QnUplaoder({
          bucket: 'blog-dist-chosan-cn',
          publicPathPrefix,
          delBeforeUpload: true,
          ak,
          sk
        })
        qnUplaoder.uploadDir(path.join(buildDir, 'dist/client'))
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    publicPath: new URL(publicPathPrefix, publicPathUrl).toString(),
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const alias = { '@utils': resolveDir('utils') }
      config.resolve.extensions.push('.ts')
      Object.assign(config.resolve.alias, alias)
    }
  }
}
