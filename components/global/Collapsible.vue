<template>
  <component
    :is="tag"
    class="p-4 text-gray-700 list-none bg-gray-100 border-4 border-transparent rounded group collapsible dark:bg-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus-visible:border-gray-800 focus-within:bg-gray-200 focus-within:border-gray-500 dark:focus-visible:bg-gray-800 dark:focus-within:bg-gray-800 dark:focus-within:border-gray-500"
  >
    <component
      :is="tag === 'details' ? 'summary' : 'h2'"
      :class="[
        'h3',
        tag === 'details' && 'text-md cursor-pointer',
        'group-hover:cursor-pointer group-hover:outline-none focus:outline-none'
      ]"
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

  mounted () {
    if (window.Modernizr.details) {
      this.tag = "details";
    }
  },
});
</script>

<style lang="postcss" scoped>
.collapsible {
  transition: background 500ms ease-out, color 500ms ease-in;
}
</style>

<style lang="postcss">
.no-details .collapsible {
  ul {
    margin-left: 0;
  }
}
</style>
