<template>
  <component
    :is="tag"
    class="relative flex flex-col w-full mb-8"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    tag: {
      type: String as PropType<"footer"|"header"|"main"|"section">,
      default: "",
    },
  },
});
</script>
