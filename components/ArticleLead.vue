<template>
  <p class="article-lead heading">
    <slot />
  </p>
</template>

<style lang="postcss" scoped>
.article-lead {
  @apply text-lg font-semibold text-gray-700 sm:text-xl dark:text-gray-300;
}
</style>
