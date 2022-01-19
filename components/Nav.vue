<template>
  <nav
    :class="[
      'flex h-max sm:text-3xl md:text-4xl',
      orientation,
      orientation === 'horizontal'
        ? 'justify-between w-full first:ml-4 md:first:ml-8 first:py-2 last:mr-4 md:last:mr-8 last:py-2'
        : 'flex-col items-center my-4',
      onSide === 'left'
        ? 'md:pr-8 first:mr-4 md:first:mr-8'
        : 'md:pl-8 first:ml-4 md:first:ml-8',
    ]"
  >
    <slot />
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    orientation: {
      type: String as PropType<"horizontal" | "vertical">,
      default: "vertical",
    },
    onSide: {
      type: String as PropType<"left" | "right">,
      default: null,
    },
  },
});
</script>
