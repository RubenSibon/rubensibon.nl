<template>
  <div class="textgroup">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.textgroup {
  @apply flex flex-col gap-3 mx-auto w-full max-w-screen-sm;
}
</style>
