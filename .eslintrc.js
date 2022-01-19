module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
  ],
  plugins: [],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "vue/attribute-hyphenation": 0,
  },
};
