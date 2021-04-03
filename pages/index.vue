<i18n lang="yaml">
nl:
  Software Developer: "Softwareontwikkelaar"
en:
  Software Developer: "Software Developer"
</i18n>

<template>
  <main class="🏡">
    <div class="😼">
      <h1 class="title">
        {{ content.title }}
      </h1>

      <h2 class="subtitle">
        {{ $t(content.subTitle) }}
      </h2>

      <p class="description">
        {{ content.description[locale || "en_GB"] }}
      </p>

      <div class="buttons-social">
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
    </div>

    <nav class="nav">
      <nuxt-link to="projects" class="link horizontal h2">
        <SvgIconChevronLeft />
        Projects
      </nuxt-link>
      <nuxt-link to="articles" class="link horizontal h2">
        Articles
        <SvgIconChevronRight />
      </nuxt-link>
    </nav>
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
    SvgIconChevronLeft: () => import("~/assets/icons/chevron-left.svg?inline"),
    SvgIconChevronRight: () => import("~/assets/icons/chevron-right.svg?inline"),
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
  @apply flex flex-col items-center justify-between h-full text-center;

  .😼 {
    @apply flex flex-col items-center justify-center flex-grow max-w-screen-md;

    .title {
      @apply mb-4;
    }

    .subtitle {
      @apply mb-8 text-2xl font-semibold;
    }

    .description {
      @apply mb-8;
    }

    .buttons-social {
      @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-4 w-full md:w-auto;
    }
  }

  .nav {
    @apply flex flex-col sm:flex-row flex-shrink items-center justify-around my-16 w-full;

    .link {
      @apply flex items-center;

      svg {
        @apply w-12 h-12 fill-current;
      }

      &.vertical {
        @apply flex flex-col;
      }
    }
  }
}
</style>
