<i18n lang="yaml">
nl:
  software_dev: "Softwareontwikkelaar"
en:
  software_dev: "Software Developer"
</i18n>

<template>
  <main class="flex flex-col items-center justify-center mx-auto min-h-screen text-center">
    <h1 class="title">
      Ruben Sibon
    </h1>

    <h2 class="text-3xl mt-4 mb-12">
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
