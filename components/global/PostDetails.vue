<template>
  <div class="details">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.details {
  @apply flex flex-wrap gap-3 my-2 w-max max-w-full
    font-semibold text-xs text-gray-700 dark:text-gray-300;
}
</style>
