<template>
  <!-- tag === 'a' && 'active:border-current active:bg-transparent active:text-purple-500 visited:border-current visited:bg-transparent visited:text-purple-500', -->
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-full border-2 border-current py-1 px-4 transition duration-500 ease-in-out bg-transparent text-purple-500 no-underline hover:shadow-sm hover:border-solid hover:border-purple-500 dark:hover:border-current hover:bg-purple-500 hover:text-white focus:outline-none focus-visible:shadow-sm focus-visible:border-solid focus-visible:border-purple-500 dark:focus-visible:border-current focus-visible:bg-purple-500 focus-visible:text-white',
      variant && 'border-current hover:border-current hover:text-white focus-visible:border-current focus-visible:text-white',
      (variant === 'github' || variant === 'codepen' || variant === 'dev-to') && 'text-[#171515] dark:text-white hover:border-white hover:text-white dark:hover:text-[#171515] hover:bg-[#171515] dark:hover:bg-white focus-visible:border-white focus-visible:text-white dark:focus-visible:text-[#171515] focus-visible:bg-[#171515] dark:focus-visible:bg-white',
      variant === 'gitlab' && 'text-[#e2432a] hover:bg-[#e2432a] focus-visible:bg-[#e2432a]',
      variant === 'stack-overflow' && 'text-[#f58025] hover:bg-[#f58025] focus-visible:bg-[#f58025]',
      variant === 'linkedin' && 'text-[#0077b5] hover:bg-[#0077b5] focus-visible:bg-[#0077b5]',
      variant === 'twitter' && 'text-[#55acee] hover:bg-[#55acee] focus-visible:bg-[#55acee]',
      classes
    ]"
  >
    <slot name="before" />

    <slot />

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
    variant: {
      type: String as PropType<"github" | "gitlab" | "codepen" | "stack-overflow" | "linkedin" | "twitter">,
      default: null,
    },
    classes: {
      type: String,
      default: "",
    },
  },
});
</script>
