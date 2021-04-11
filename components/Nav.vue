<template>
  <nav :class="['nav', orientation, onSide]">
    <slot />
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    onSide: {
      type: String as PropType<"left" | "right">,
      default: null,
    },
    orientation: {
      type: String as PropType<"horizontal" | "vertical">,
      default: null,
    },
  },
});
</script>

<style lang="postcss" scoped>
.nav {
  @apply flex h-max sm:text-3xl md:text-4xl;

  a {
    @apply flex items-center border-none;

    &:link,
    &:visited,
    &:active {
      @apply border-none;
    }
  }

  &.horizontal {
    @apply flex justify-between w-full;

    a:first-child {
      @apply ml-4 md:ml-8 py-2;
    }

    a:last-child {
      @apply mr-4 md:mr-8 py-2;
    }
  }

  &.vertical {
    @apply flex flex-col items-center my-4;

    a {
      @apply flex-col cursor-pointer px-4;
    }
  }

  &.left {
    @apply md:pr-8;

    a:first-child {
      @apply mr-4 md:mr-8;
    }
  }

  &.right {
    @apply md:pl-8;

    a:first-child {
      @apply ml-4 md:ml-8;
    }
  }
}
</style>
