<template>
  <div :class="['label', { invert: invert }]">
    <SvgIconTag v-if="showIcon" aria-hidden="true" /> <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    SvgIconTag: () => import("~/assets/icons/tag.svg?inline"),
  },

  props: {
    invert: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
.label {
  @apply flex items-center rounded-full py-1 px-2 w-max h-max
    font-semibold text-xs bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 lowercase tracking-wide
    select-none;

  svg {
    @apply mr-1 w-4 h-4 fill-current;
  }

  &.invert {
    @apply bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100;
  }
}
</style>
