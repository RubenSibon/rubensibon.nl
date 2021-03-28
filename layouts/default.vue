<template>
  <div>
    <Nuxt />

    <!-- <footer class="bottom-0 left-0">
      <span>{{ $t("languages") }}:</span>
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('nl')">Nederlands</nuxt-link>
    </footer> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  head () {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
});
</script>

<style lang="postcss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

h1 {
  @apply text-8xl mb-4;

  line-height: 1.5;
}

h2 {
  @apply text-3xl;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #1b518b;
  box-shadow: 0 0 0.5rem 0 #1b518b;
}

.button--grey:focus {
  color: #1b518b;
  border-color: #1b518b;
  box-shadow: 0 0 0.5rem 0 #1b518b;
}
</style>
