<template>
  <nav class="toc">
    <ul class="toc-list">
      <li v-for="item of items" :key="item.id">
        <NuxtLink
          :to="`#${item.id}`"
          :class="[
            'toc-link',
            { 'py-2': item.depth === 2, 'ml-2 pb-2': item.depth === 3 }
          ]"
        >
          {{ item.text }}
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
