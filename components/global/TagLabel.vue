<template>
  <div :class="['label', { invert: invert }]">
    <SvgTagIcon /> <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    SvgTagIcon: () => import("~/assets/icons/tag.svg?inline"),
  },

  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="postcss" scoped>
.label {
  @apply rounded-full py-1 px-2 w-max
    flex items-center
    font-semibold text-xs bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900
    select-none lowercase;

  height: max-content;
  letter-spacing: 0.5px;

  svg {
    @apply mr-1 w-4 h-4;

    fill: currentColor;
  }

  &.invert {
    @apply bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100;
  }
}
</style>
