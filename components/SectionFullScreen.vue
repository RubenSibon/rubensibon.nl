<template>
  <section class="flex flex-col items-center w-screen min-h-screen justify-evenly max-w-screen-2xl">
    <slot name="before" />

    <div class="flex flex-col items-center justify-center flex-1 w-full h-full px-4 md:px-8">
      <slot />
    </div>

    <slot name="after" />
  </section>
</template>

<style lang="postcss" scoped>
section {
  min-height: var(--vp-height, 100vh);
}
</style>

<style lang="postcss">
/* Fix for Internet Explorer 11 */
html[is-ie] {
  section {
    @apply h-screen;
  }
}
</style>
