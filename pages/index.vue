<i18n lang="yaml">
nl:
  Software Developer: "Softwareontwikkelaar"
en:
  Software Developer: "Software Developer"
</i18n>

<template>
  <main class="🏡">
    <section class="screen screen-1">
      <div class="🧔">
        <h1 class="title">
          {{ content.title }}
        </h1>

        <h2 class="subtitle">
          {{ $t(content.subTitle) }}
        </h2>

        <p class="description">
          {{ content.description[locale || "en_GB"] }}
        </p>
      </div>

      <nav class="nav">
        <div class="horizontal">
          <nuxt-link :to="localePath('projects')" class="link">
            <SvgIconChevronLeft aria-hidden />
            <span class="sr-only">⬅&nbsp;</span>
            {{ $t("Projects") }}
          </nuxt-link>

          <nuxt-link :to="localePath('articles')" class="link">
            {{ $t("Articles") }}
            <SvgIconChevronRight aria-hidden />
            <span class="sr-only">&nbsp;➡</span>
          </nuxt-link>
        </div>

        <div class="vertical">
          <span class="link">
            {{ $t("More") }}
            <SvgIconChevronDown aria-hidden />
            <span class="sr-only">⬇</span>
          </span>
        </div>
      </nav>
    </section>

    <section class="screen screen-2">
      <div class="buttons-social">
        <Button
          tag="a"
          href="https://github.com/RubenSibon"
          target="_blank"
          rel="noopener noreferrer"
          class="github"
        >
          <template #before>
            <SvgIconGithub aria-hidden />
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
            <SvgIconSO aria-hidden />
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
            <SvgIconLinkedIn aria-hidden />
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
            <SvgIconTwitter aria-hidden />
          </template>

          Twitter
        </Button>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CONTENT from "./index.json";

export default defineComponent({
  components: {
    SvgIconGithub: () => import("~/assets/icons/github.svg?inline"),
    SvgIconSO: () => import("~/assets/icons/stackoverflow.svg?inline"),
    SvgIconLinkedIn: () => import("~/assets/icons/linkedin.svg?inline"),
    SvgIconTwitter: () => import("~/assets/icons/twitter.svg?inline"),
    SvgIconChevronRight: () => import("~/assets/icons/chevron-right.svg?inline"),
    SvgIconChevronDown: () => import("~/assets/icons/chevron-down.svg?inline"),
    SvgIconChevronLeft: () => import("~/assets/icons/chevron-left.svg?inline"),
  },

  asyncData ({ i18n }) {
    const locale = i18n.locale;

    return {
      locale,
    };
  },

  data () {
    return {
      content: CONTENT,
    };
  },
});
</script>

<style lang="postcss" scoped>
.🏡 {
  @apply flex flex-col items-center justify-evenly mx-auto px-4 md:px-8 max-w-screen-md lg:max-w-screen-lg text-center;

  .screen {
    @apply flex flex-col items-center justify-evenly h-screen min-h-screen;
  }

  .🧔 {
    @apply flex flex-col items-center justify-center;

    .title {
      @apply mb-4;
    }

    .subtitle {
      @apply mb-4 sm:mb-8 text-2xl font-semibold;
    }

    .description {
      @apply mb-4 max-w-screen-sm md:max-w-screen-md;
    }
  }

  .nav {
    @apply flex flex-col justify-evenly pb-4 md:px-8 w-full sm:text-3xl md:text-4xl;

    .horizontal {
      @apply flex flex-wrap justify-between;

      &:first-child {
        @apply justify-self-start;
      }

      &:last-child {
        @apply justify-self-end;
      }
    }

    .vertical {
      @apply flex flex-col items-center mt-8;

      .link {
        @apply flex-col;
      }
    }

    .link {
      @apply flex items-center;

      svg {
        @apply w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-current;
      }

      &:link,
      &:visited {
        @apply border-none;
      }
    }
  }

  .buttons-social {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4 w-full md:w-auto;
  }
}
</style>
