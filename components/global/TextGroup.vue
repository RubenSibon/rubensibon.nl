<template>
  <div
    :class="[
      'textgroup',
      { 'px-0': noPaddingX.includes(null) },
      { 'sm:px-0': noPaddingX.includes('sm') },
      { 'md:px-0': noPaddingX.includes('md') },
      { 'lg:px-0': noPaddingX.includes('lg') },
      { 'px-6 md:px-8': noPaddingX.includes(false) },
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
    noPaddingX: {
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
