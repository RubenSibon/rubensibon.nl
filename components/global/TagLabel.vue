<template>
  <div :class="['label', { invert: invert }, 'ie-gap-horizontal-sm']">
    <Icon v-if="showIcon" svg-icon="SvgIconTag" aria-hidden="true" /> <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
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
  @apply flex items-center gap-1
    border-2 border-current rounded-full py-1 pr-3 pl-2 w-max h-max
    font-semibold text-xs text-gray-900 dark:text-gray-100 lowercase tracking-wide
    select-none;

  &.invert {
    @apply border-current text-gray-100 dark:text-gray-900;
  }
}
</style>
