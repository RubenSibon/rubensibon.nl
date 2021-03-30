<i18n lang="yaml">
nl:
  software_dev: "Softwareontwikkelaar"
en:
  software_dev: "Software Developer"
</i18n>

<template>
  <main class="home">
    <h1 class="title">
      Ruben Sibon
    </h1>

    <h2 class="mt-4 mb-12 text-2xl font-medium">
      {{ $t("software_dev") }}
    </h2>

    <div class="links">
      <a
        href="https://github.com/RubenSibon"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/rubensibon"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        LinkedIn
      </a>
      <a
        href="https://twitter.com/RubenSibon"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        Twitter
      </a>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.home {
  @apply flex flex-col items-center justify-center flex-1 h-full text-center;
}
</style>
