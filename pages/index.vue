<i18n lang="yaml">
nl:
  Software Developer: "Softwareontwikkelaar"
  Follow me: "Volg mij"
  Get in touch: "Start een gesprek"
  if it pleases you: "als het je pleziert"
  but really, only if you want to: "maar echt, alleen als je dat wilt"
  Even more: "Nog meer"
en:
  Software Developer: "Software Developer"
  Follow me: "Follow me"
  Get in touch: "Get in touch"
  if it pleases you: "if it pleases you"
  but really, only if you want to: "but really, only if you want to"
  Even more: "Even more"
</i18n>

<template>
  <!-- <SlideScreen
    class="🏡"
    :adjacent="{
      left: '/projects',
      right: '/articles',
    }"
  > -->
  <div class="🏡">
    <section id="screen1">
      <div class="me">
        <figure class="picture">
          <picture>
            <source srcset="~/assets/img/homepage/ruben_sibon.jpg" type="image/webp">

            <img src="~/assets/img/homepage/ruben_sibon.jpg" alt="A photo of this website's author.">
          </picture>
        </figure>

        <template v-if="content">
          <h1 class="title">
            {{ content.title }}
          </h1>

          <h2 class="subtitle">
            {{ $t(content.subTitle) }}
          </h2>

          <p class="description">
            {{ content.description[locale || "en"] }}
          </p>
        </template>
      </div>

      <nav class="nav">
        <div class="horizontal">
          <nuxt-link :to="localePath('/projects')" class="link">
            <span>
              <SvgIconChevronLeft aria-hidden="true" />
            </span>

            <span class="sr-only">⬅&nbsp;</span>

            {{ $t("Projects") }}
          </nuxt-link>

          <nuxt-link :to="localePath('/articles')" class="link">
            {{ $t("Articles") }}

            <span>
              <SvgIconChevronRight aria-hidden="true" />
            </span>

            <span class="sr-only">&nbsp;➡</span>
          </nuxt-link>
        </div>

        <div class="vertical">
          <a
            v-scroll-to="'#screen2'"
            tabindex="0"
            :title="$t('More')"
            class="link"
          >
            {{ $t("More") }}

            <span>
              <SvgIconChevronDown aria-hidden="true" />
            </span>

            <span class="sr-only">⬇</span>
          </a>
        </div>
      </nav>
    </section>

    <section id="screen2">
      <div class="follow">
        <h2>
          {{ $t('Follow me') }}
        </h2>

        <p class="mb-4">
          ({{ $t("if it pleases you") }})
        </p>

        <div class="buttons-social ie-gap-vertical">
          <Button
            tag="a"
            href="https://github.com/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="github"
          >
            <template #before>
              <span>
                <SvgIconGithub aria-hidden="true" />
              </span>
            </template>

            <span>
              GitHub
            </span>
          </Button>

          <Button
            tag="a"
            href="https://gitlab.com/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="gitlab"
          >
            <template #before>
              <span>
                <SvgIconGitlab aria-hidden="true" />
              </span>
            </template>

            <span>
              GitLab
            </span>
          </Button>

          <Button
            tag="a"
            href="https://codepen.io/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="codepen"
          >
            <template #before>
              <span>
                <SvgIconCodePen aria-hidden="true" />
              </span>
            </template>

            <span>
              CodePen
            </span>
          </Button>

          <Button
            tag="a"
            href="https://stackoverflow.com/story/rubensibon"
            target="_blank"
            rel="noopener noreferrer"
            class="stack-overflow"
          >
            <template #before>
              <span>
                <SvgIconSO aria-hidden="true" />
              </span>
            </template>

            <span>
              StackOverflow
            </span>
          </Button>

          <Button
            tag="a"
            href="https://www.linkedin.com/in/rubensibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="linkedin"
          >
            <template #before>
              <span>
                <SvgIconLinkedIn aria-hidden="true" />
              </span>
            </template>

            <span>
              LinkedIn
            </span>
          </Button>

          <Button
            tag="a"
            href="https://twitter.com/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="twitter"
          >
            <template #before>
              <span>
                <SvgIconTwitter aria-hidden="true" />
              </span>
            </template>

            <span>
              Twitter
            </span>
          </Button>
        </div>
      </div>

      <nav class="nav">
        <div class="vertical">
          <a
            v-scroll-to="'#screen3'"
            tabindex="0"
            :title="$t('Even more')"
            class="link"
          >
            {{ $t("Even more") }}

            <span>
              <SvgIconChevronDown aria-hidden="true" />
            </span>

            <span class="sr-only">⬇</span>
          </a>
        </div>
      </nav>
    </section>

    <section id="screen3">
      <h2>
        {{ $t('Get in touch') }}
      </h2>

      <p class="mb-4">
        ({{ $t("but really, only if you want to") }})
      </p>

      <p>Sorry, the contact form is a<br><i>Work in Progress</i><br>¯\_(ツ)_/¯</p>
    </section>
  </div>
  <!-- </SlideScreen> -->
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
    SvgIconGitlab: () => import("~/assets/icons/gitlab.svg?inline"),
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
  @apply flex flex-col items-center mx-auto px-4 md:px-8 text-center;

  section {
    @apply flex flex-col items-center justify-center max-w-screen-2xl w-screen h-screen;

    min-height: var(--vp-height, 100vh);
  }

  .me {
    @apply flex flex-col items-center justify-center mx-4 md:mx-8 h-full;

    .picture {
      @apply rounded-full mb-4 sm:mb-6 w-36 h-36 overflow-hidden;
    }

    .title {
      @apply mb-2;
    }

    .subtitle {
      @apply mb-4 sm:mb-6 text-2xl font-semibold;
    }

    .description {
      @apply max-w-screen-sm md:max-w-screen-md;
    }
  }

  nav {
    @apply bottom-0 left-0 flex flex-col justify-evenly pb-4 md:px-8 w-full h-max sm:text-3xl md:text-4xl;

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

      /* Temporarily hide horizontal navs */

      /* display: none; */

      .link:first-child {
        @apply ml-4 md:ml-8 py-2;
      }

      .link:last-child {
        @apply mr-4 md:mr-8 py-2;
      }
    }

    .vertical {
      @apply flex flex-col items-center my-4;

      .link {
        @apply flex-col cursor-pointer px-4;
      }
    }
  }

  .follow {
    @apply flex flex-col items-center justify-center mx-4 md:mx-8 h-full;

    .buttons-social {
      @apply grid grid-cols-1 sm:grid-cols-4 md:grid-cols-12 gap-3
        mx-auto px-4 w-full sm:w-auto max-w-screen-md h-max;

      a {
        @apply sm:col-span-2 md:col-span-6;

        &:last-child:not(:nth-child(even)) {
          @apply sm:col-start-2 sm:col-end-4 md:col-start-4 md:col-end-10;
        }
      }
    }
  }
}
</style>
