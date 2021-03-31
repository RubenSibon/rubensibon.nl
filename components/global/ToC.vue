<template>
  <nav class="toc">
    <ul class="toc-list">
      <li v-for="link of items" :key="link.id">
        <NuxtLink
          :to="`#${link.id}`"
          :class="['toc-link', { 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }]"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

interface Link {
  id: string;
  depth: number;
  text: string;
};

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Link[]>,
      default: () => [],
    },
  },
});
</script>

<style lang="postcss" scoped>
.toc {
  &-list {
    @apply ml-6;
  }

  &-link:link,
  &-link:hover,
  &-link:focus {
    @apply border-none text-gray-700 dark:text-gray-300;
  }
}
</style>
