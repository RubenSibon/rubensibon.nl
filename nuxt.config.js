import { meta } from "./meta";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en",
      dir: "ltr",
    },

    title: meta.title,

    meta: [
      { charset: "utf-8" },

      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { hid: "description", name: "description", content: meta.description },

      { name: "color-scheme", content: "dark light" },

      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/little-penguin-144.png" },

      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },

      { property: "og:url", content: "https://www.rubensibon.nl/" },
      { property: "og:image", content: "https://www.rubensibon.nl/img/sitebanner.jpg" },

      { name: "twitter:title", content: meta.title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@RubenSibon" },
      { name: "twitter:creator", content: "@RubenSibon" },

      { name: "flattr:id", content: "qkv675" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon-precomposed", href: "/little-penguin-152.png" },
    ],
    script: [
      { src: "/js/ie11-support.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "node_modules/focus-visible/dist/focus-visible.js",
    { src: "~/plugins/directive-hammer", ssr: false },
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
    // https://vue-scrollto.netlify.app/
    "vue-scrollto/nuxt",
    // https://github.com/dword-design/nuxt-modernizr
    ["nuxt-modernizr", {
      "feature-detects": ["css/cssgrid", "elem/details"],
      options: ["setClasses"],
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // i18n configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    vueI18nLoader: true,
    vueI18n: {
      fallbackRoot: true,
      silentFallbackWarn: true,
    },
    locales: [
      {
        code: "nl",
        name: "Nederlands",
        iso: "nl-NL",
        file: "nl-NL",
      },
      {
        code: "en",
        name: "English",
        iso: "en-GB",
        file: "en-GB.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
    strategy: "prefix",
    seo: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
