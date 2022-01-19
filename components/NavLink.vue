<template>
  <a
    :href="target"
    :tabindex="tabindex"
    :title="title"
    :class="[
      'flex items-center border-none hover:border-none visited:border-none active:border-none',
      orientation === 'horizontal' ? '' : 'flex-col cursor-pointer px-4',
      classes,
    ]"
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
    orientation: {
      type: String as PropType<"horizontal" | "vertical">,
      default: "vertical",
    },
    linkHandler: {
      type: Function as PropType<(event: Event, toScreen: string) => void>,
      default: null,
    },
  },
});
</script>
