<template>
  <component
    :is="tag"
    class="button"
  >
    <slot name="before" />

    <span>
      <slot />
    </span>

    <slot name="after" />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    tag: {
      type: String as PropType<"button" | "a">,
      default: "button",
    },
  },
});
</script>

<style lang="postcss" scoped>
.button {
  @apply inline-block rounded-full border-2 border-current py-1 px-4
    transition duration-500 ease-in-out
    bg-transparent text-purple-500 no-underline
    hover:shadow-sm hover:border-solid hover:border-purple-500 dark:hover:border-current hover:bg-purple-500 hover:text-white
    focus:outline-none
    focus-visible:shadow-sm focus-visible:border-solid focus-visible:border-purple-500 dark:focus-visible:border-current focus-visible:bg-purple-500 focus-visible:text-white
  ;

  &a {
    @apply active:border-current active:bg-transparent active:text-purple-500;
    @apply visited:border-current visited:bg-transparent visited:text-purple-500;
  }
}
</style>
