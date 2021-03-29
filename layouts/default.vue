<template>
  <div class="flex flex-col items-center justify-center min-h-screen mx-auto">
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
    return this.$nuxtI18nHead({ addSeoAttributes: true });
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
h6 {
  @apply font-title font-bold;

  letter-spacing: 1px;
  color: #35495e;
}

h1,
.h1 {
  @apply text-6xl;
}

h2,
.h2 {
  @apply text-4xl;
}

h3,
.h3 {
  @apply text-2xl;
}

h4,
.h4 {
  @apply text-lg;
}

h6,
.h6 {
  @apply font-medium;
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
