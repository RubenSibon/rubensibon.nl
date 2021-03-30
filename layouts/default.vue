<template>
  <div class="flex flex-col items-center justify-start min-h-screen mx-auto">
    <Nuxt />

    <footer class="flex items-center justify-start max-w-xl gap-3 p-5 mx-auto">
      <span>{{ $t("languages") }}:</span>
      <nuxt-link :to="switchLocalePath('en')">
        English
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('nl')">
        Nederlands
      </nuxt-link>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: `Ruben Sibon: ${this.$i18n.t("profession")}`,
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        // @ts-ignore
        ...i18nHead.meta,
      ],
      link: [
        // @ts-ignore
        ...i18nHead.link,
      ],
    };
  },
});
</script>

<style lang="postcss">
html {
  @apply font-sans text-base sm:text-lg;

  box-sizing: border-box;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  @apply dark:bg-gray-900;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
.heading {
  @apply font-bold text-gray-900 dark:text-white;

  letter-spacing: 1px;
}

h1,
.h1 {
  @apply text-4xl sm:text-6xl;
}

h2,
.h2 {
  @apply text-3xl sm:text-4xl;
}

h3,
.h3 {
  @apply text-2xl font-semibold;
}

h4,
.h4 {
  @apply font-semibold;
}

h5,
.h5,
h6,
.h6 {
  @apply font-medium;
}

p {
  @apply text-gray-900 dark:text-white;
}

.button--grey {
  display: inline-block;
  margin-left: 15px;
  border: 1px solid #35495e;
  border-radius: 4px;
  padding: 10px 30px;
  text-decoration: none;
  color: #35495e;
}

.button--grey:hover {
  box-shadow: 0 0 0.5rem 0 #1b518b;
  background-color: #1b518b;
  color: #fff;
}

.button--grey:focus {
  border-color: #1b518b;
  box-shadow: 0 0 0.5rem 0 #1b518b;
  color: #1b518b;
}
</style>
