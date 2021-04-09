<template>
  <component :is="tag" class="collapsible">
    <component
      :is="tag === 'details' ? 'summary' : 'h2'"
      class="h3"
    >
      <slot name="summary" />
    </component>

    <slot name="content" />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

declare global {
  interface Window {
    Modernizr: {
      details: boolean;
    };
  }
};

interface Data {
  tag: "details" | "div";
};

export default defineComponent({
  data (): Data {
    return {
      tag: "div",
    };
  },

  beforeMounted () {
    if (process.client && window.Modernizr.details) {
      this.tag = "details";
    }
  },
});
</script>

<style lang="postcss" scoped>
.collapsible {
  @apply rounded p-4 list-none
    bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300;

  transition: background 500ms ease-out, color 500ms ease-in;

  summary {
    @apply text-md cursor-pointer;
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

<style lang="postcss">
.no-details .collapsible {
  ul {
    @apply ml-0;
  }
}
</style>
