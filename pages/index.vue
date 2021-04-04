<i18n lang="yaml">
nl:
  Software Developer: "Softwareontwikkelaar"
  Follow me: "Volg mij"
  Get in touch: "Start een gesprek"
  if it pleases you: "als het u pleziert"
  but really, only if you want to: "maar echt, alleen als u dat wilt"
en:
  Software Developer: "Software Developer"
  Follow me: "Follow me"
  Get in touch: "Get in touch"
  if it pleases you: "if it pleases you"
  but really, only if you want to: "but really, only if you want to"
</i18n>

<template>
  <SlideScreen
    class="🏡"
    :adjacent="{
      left: 'projects',
      right: 'articles',
    }"
  >
    <section id="screen1" class="screen">
      <div class="🧔">
        <figure class="picture">
          <picture>
            <source srcset="~/assets/img/homepage/ruben_sibon.jpg" type="image/webp">

            <img src="~/assets/img/homepage/ruben_sibon.jpg" alt="A photo of this website's author.">
          </picture>

          <!-- <figcaption>
            A photo of this website's author.
          </figcaption> -->
        </figure>

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
            <SvgIconChevronLeft aria-hidden="true" />

            <span class="sr-only">⬅&nbsp;</span>

            {{ $t("Projects") }}
          </nuxt-link>

          <nuxt-link :to="localePath('/articles')" class="link">
            {{ $t("Articles") }}

            <SvgIconChevronRight aria-hidden="true" />

            <span class="sr-only">&nbsp;➡</span>
          </nuxt-link>
        </div>

        <div class="vertical">
          <a
            v-scroll-to="'#screen2'"
            tabindex="0"
            :alt="$t('More')"
            class="link"
          >
            {{ $t("More") }}

            <SvgIconChevronDown aria-hidden="true" />

            <span class="sr-only">⬇</span>
          </a>
        </div>
      </nav>
    </section>

    <section id="screen2" class="screen">
      <div class="w-full">
        <h2>
          {{ $t('Follow me') }}
        </h2>

        <p class="mb-4">
          ({{ $t("if it pleases you") }})
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
              <SvgIconGithub aria-hidden="true" />
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
              <SvgIconSO aria-hidden="true" />
            </template>

            StackOverflow
          </Button>

          <Button
            tag="a"
            href="https://codepen.io/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            class="github"
          >
            <template #before>
              <SvgIconCodePen aria-hidden="true" />
            </template>

            CodePen
          </Button>

          <Button
            tag="a"
            href="https://www.linkedin.com/in/rubensibon"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin"
          >
            <template #before>
              <SvgIconLinkedIn aria-hidden="true" />
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
              <SvgIconTwitter aria-hidden="true" />
            </template>

            Twitter
          </Button>
        </div>
      </div>

      <div class="w-full">
        <h2>
          {{ $t('Get in touch') }}
        </h2>

        <p class="mb-4">
          ({{ $t("but really, only if you want to") }})
        </p>

        <p>Sorry, the contact form is a<br><i>Work in Progress</i><br>¯\_(ツ)_/¯</p>
      </div>
    </section>
  </SlideScreen>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CONTENT from "./index.json";

interface Data {
  content: {
    title: string;
    subTitle: string;
    description: {
      en: string;
      nl: string;
    };
  };
};

export default defineComponent({
  components: {
    SvgIconGithub: () => import("~/assets/icons/github.svg?inline"),
    SvgIconSO: () => import("~/assets/icons/stackoverflow.svg?inline"),
    SvgIconCodePen: () => import("~/assets/icons/codepen.svg?inline"),
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

  data (): Data {
    return {
      content: CONTENT,
    };
  },
});
</script>

<style lang="postcss" scoped>
.🏡 {
  @apply flex flex-col items-center justify-evenly mx-auto px-4 md:px-8  text-center;

  .screen {
    @apply flex flex-col items-center justify-evenly max-w-screen-2xl w-screen h-screen;

    height: var(--vp-height);
  }

  .🧔 {
    @apply flex flex-col items-center justify-center mx-4 md:mx-8;

    .picture {
      @apply rounded-full mb-4 w-36 h-36 overflow-hidden;
    }

    .title {
      @apply mb-4;
    }

    .subtitle {
      @apply mb-4 sm:mb-8 text-2xl font-semibold;
    }

    .description {
      @apply max-w-screen-sm md:max-w-screen-md;
    }
  }

  .nav {
    @apply flex flex-col justify-evenly pb-4 md:px-8 w-full sm:text-3xl md:text-4xl;

    .link {
      @apply flex items-center border-none;

      svg {
        @apply w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-current;
      }

      &:link,
      &:visited,
      &:active {
        @apply border-none;
      }
    }

    .horizontal {
      @apply flex flex-wrap justify-between;

      .link:first-child {
        @apply ml-4 md:ml-8 py-2;
      }

      .link:last-child {
        @apply mr-4 md:mr-8 py-2;
      }
    }

    .vertical {
      @apply flex flex-col items-center mt-4;

      .link {
        @apply flex-col cursor-pointer px-4;
      }
    }
  }

  .buttons-social {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4 w-full sm:w-auto;
  }
}
</style>
