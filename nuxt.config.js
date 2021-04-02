export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Ruben Sibon",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Personal website of Ruben Sibon, a software developer from Amsterdam, The Netherlands." },
      { name: "color-scheme", content: "dark light" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://github.com/nuxt-community/svg-module/
    "@nuxtjs/svg",
  ],

  tailwindcss: {
    jit: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // https://i18n.nuxtjs.org/
    "nuxt-i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // i18n configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    vueI18nLoader: true,
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-GB",
        file: "en-GB.js",
      },
      {
        code: "nl",
        name: "Nederlands",
        iso: "nl-NL",
        file: "nl-NL.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "nl",
    strategy: "prefix_and_default",
    seo: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
