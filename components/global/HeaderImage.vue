<template>
  <figure
    :class="['headerimage', { gradient: gradient }]"
    :label="alt"
  >
    <picture>
      <source
        v-for="[mediaQuery, setSrc] in srcSet"
        :key="mediaQuery"
        :media="mediaQuery"
        :srcset="setSrc"
      >

      <img
        :src="src"
        :alt="alt"
        :class="[
          'min-h-screen-2/3',
          'w-screen',
          bgColor ? `bg-${bgColor}` : 'bg-gray-50 dark:bg-gray-950',
        ]"
      >
    </picture>

    <figcaption>
      {{ alt }}
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    alt: {
      type: String,
      required: true,
    },
    srcSet: {
      type: Array as PropType<[string, string][]>,
      default: () => [],
    },
    src: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: null,
    },
    gradient: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="postcss" scoped>
.headerimage {
  @apply flex flex-col items-center justify-end relative mx-auto w-full overflow-x-hidden
    text-center
  ;

  img,
  figcaption {
    @apply mx-auto;
  }

  figcaption {
    @apply
      absolute top-0 right-0 rounded-full m-3 py-1 px-3 w-max max-w-none
      bg-black bg-opacity-50 text-gray-200 text-xs
    ;
  }

  &.gradient {
    &::after {
      background: var(--bg-color, #f8fafc);
      background: linear-gradient(to top, var(--bg-color, #010810) 10%, rgba(255, 255, 255, 0) 50%);
      content: "";

      @apply block absolute bottom-0 left-0 w-full h-full;
    }
  }
}
</style>
