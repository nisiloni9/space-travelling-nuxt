export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: "/space-travelling-nuxt/"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'space-travelling-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/space-travelling-nuxt/favicon-32x32.png' },
    { rel: "preconnect", href: "https://fonts.googleapis.com", crossorigin: true },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap" }

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/index.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    dir: 'docs',
    devtools: true,
    subFolders: false
  },

  vue: {
    config: {
      devtools: true
    }
  }
};
