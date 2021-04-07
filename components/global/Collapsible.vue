<template>
  <details class="collapsible" open>
    <summary class="h5">
      <slot name="summary" />
    </summary>

    <slot name="content" />
  </details>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
<<<<<<< HEAD
  mounted () {
    if (this.$el) {
      this.$el.removeAttribute("open");
    }
=======
  beforeMount () {
    this.$el.removeAttribute("open");
>>>>>>> fix: make details el open by default before JS
  },
});
</script>

<style lang="postcss" scoped>
.collapsible {
  @apply rounded p-4
    bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300;

  transition: background 500ms ease-out, color 500ms ease-in;

  summary {
    @apply text-md;
  }

  &:hover,
  &:focus-within {
    @apply bg-gray-200 dark:bg-gray-800;

    & summary {
      @apply cursor-pointer outline-none;
    }
  }
}
</style>
