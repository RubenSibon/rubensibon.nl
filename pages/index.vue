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
        class="github"
      >
        <template #before>
          <SvgIconGithub />
        </template>

        GitHub
      </Button>

      <Button
        tag="a"
        href="https://stackoverflow.com/story/rubensibon"
        target="_blank"
        rel="noopener noreferrer"
        class="stack-overflow"
      >
        <template #before>
          <SvgIconSO />
        </template>

        StackOverflow
      </Button>

      <Button
        tag="a"
        href="https://www.linkedin.com/in/rubensibon"
        target="_blank"
        rel="noopener noreferrer"
        class="linkedin"
      >
        <template #before>
          <SvgIconLinkedIn />
        </template>

        LinkedIn
      </Button>

      <Button
        tag="a"
        href="https://twitter.com/RubenSibon"
        target="_blank"
        rel="noopener noreferrer"
        class="twitter"
      >
        <template #before>
          <SvgIconTwitter />
        </template>

        Twitter
      </Button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    SvgIconGithub: () => import("~/assets/icons/github.svg?inline"),
    SvgIconSO: () => import("~/assets/icons/stackoverflow.svg?inline"),
    SvgIconLinkedIn: () => import("~/assets/icons/linkedin.svg?inline"),
    SvgIconTwitter: () => import("~/assets/icons/twitter.svg?inline"),
  },
});
</script>

<style lang="postcss" scoped>
.home {
  @apply flex flex-col items-center justify-center flex-1 h-full text-center;

  .title {
    @apply mb-4;
  }

  .subtitle {
    @apply mb-12 text-2xl font-semibold;
  }

  .links {
    @apply flex items-center justify-center gap-3 flex-wrap px-4;
  }
}
</style>
