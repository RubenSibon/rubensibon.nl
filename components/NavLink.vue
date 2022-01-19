<template>
  <a
    :href="target"
    :tabindex="tabindex"
    :title="title"
    :class="['flex items-center border-none', classes]"
    @click="linkHandler($event, target)"
    @keyup.enter="linkHandler($event, target)"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    target: {
      type: String,
      default: "",
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    classes: {
      type: String,
      default: "",
    },
    linkHandler: {
      type: Function as PropType<(event: Event, toScreen: string) => void>,
      default: null,
    },
  },
});
</script>

<style lang="postcss" scoped>
a {
  &:link,
  &:visited,
  &:active {
    @apply border-none;
  }
}
</style>
