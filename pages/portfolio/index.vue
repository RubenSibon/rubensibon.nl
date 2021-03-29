<template>
  <main class="portfolio">
    <header class="portfolio-header">
      <div class="mr-2 bg-gray-700 border-solid h-11 w-11" />

      <h1>Portfolio</h1>
    </header>

    <div class="portfolio-grid">
      <figure v-for="n of 24" :key="n">
        <img src="https://placeimg.com/640/480/tech" alt="Stock photo">
        <caption>
          <h2 class="h3">
            Project Secret
          </h2>
          <p>Korte beschrijving van het project.</p>
        </caption>
      </figure>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup () {},
});
</script>

<style lang="postcss" scoped>
.portfolio {
  @apply mx-auto max-w-screen-2xl;

  &-header {
    @apply flex items-center justify-start p-5;
  }

  &-grid {
    @apply
      grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
      p-5
    ;
  }

  caption {
    @apply py-5 w-full text-left;
  }
}
</style>
