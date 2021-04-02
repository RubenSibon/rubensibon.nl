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

    <h2 class="subtitle">
      {{ $t("software_dev") }}
    </h2>

    <div class="links">
      <Button
        tag="a"
        href="https://github.com/RubenSibon"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>

      <Button
        tag="a"
        href="https://stackoverflow.com/story/rubensibon"
        target="_blank"
        rel="noopener noreferrer"
      >
        StackOverflow
      </Button>

      <Button
        tag="a"
        href="https://www.linkedin.com/in/rubensibon"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Button>

      <Button
        tag="a"
        href="https://twitter.com/RubenSibon"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Button>
    </div>

    <Button>
      Just a button
    </Button>
  </main>
</template>

<style lang="postcss" scoped>
.home {
  @apply flex flex-col items-center justify-center flex-1 h-full text-center;

  .title {
    @apply mb-4;
  }

  .subtitle {
    @apply mb-12 text-2xl font-semibold;
  }
}
</style>
