<template>
  <div class="textgroup">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.textgroup {
  @apply flex flex-col gap-3 mx-auto w-full max-w-screen-sm px-6 md:px-8;
}
</style>
