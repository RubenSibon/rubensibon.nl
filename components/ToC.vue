<template>
  <nav>
    <ul class="ml-6">
      <NuxtLink
        v-for="item of items"
        :key="item.id"
        :to="`#${item.id}`"
        class="text-gray-700 group dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus-within:text-gray-900 dark:focus-within:text-gray-100"
      >
        <li
          tabindex="0"
          :class="[
            'px-3 rounded-xl focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700 focus:bg-gray-300 dark:focus:bg-gray-700',
            { 'mt-2': item.depth === 2, 'ml-2': item.depth === 3 }
          ]"
        >
          {{ item.text }}
        </li>
      </NuxtLink>
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
