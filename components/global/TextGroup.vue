<template>
  <div
    :class="[
      'textgroup',
      { 'px-0': noPaddingXForGt.includes(null) },
      { 'px-6 sm:px-0': noPaddingXForGt.includes('sm') },
      { 'px-6 md:px-0': noPaddingXForGt.includes('md') },
      { 'px-6 lg:px-0': noPaddingXForGt.includes('lg') },
      { 'px-6 md:px-8': noPaddingXForGt.includes(false) },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

type FromScreenSize = null | "sm" | "md" | "lg";

export default defineComponent({
  props: {
    noPaddingXForGt: {
      type: Array as PropType<FromScreenSize[]>,
      default: () => [false],
    },
  },
});
</script>

<style lang="postcss" scoped>
.textgroup {
  @apply flex flex-col gap-3 mx-auto w-full max-w-screen-sm;
}
</style>
