<template>
  <article class="post">
    <header class="post-header">
      <div :class="['post-header-background', headerHeightClass]">
        <figure
          v-if="article.img && article.img.src"
          ref="postHeaderFigure"
          class="gradient"
          :label="article.img.alt"
        >
          <picture>
            <source
              v-for="[mediaQuery, src] in Object.entries(article.img.srcSet)"
              :key="mediaQuery"
              :media="mediaQuery"
              :srcset="src"
            >

            <img
              :src="article.img.src"
              :alt="article.img.alt"
              :class="[
                headerHeightClass,
                'min-w-screen-full',
                article.img.bgColor ? `bg-${article.img.bgColor}` : null,
              ]"
            >
          </picture>

          <figcaption>
            {{ article.img.alt }}
          </figcaption>
        </figure>

        <!-- Below div ensures that the positioned header has height when there is no header image. -->
        <div v-else :class="[headerHeightClass, 'min-h-screen-1/4']" />

        <div :class="`post-header-front ${headerHeightClass} min-h-screen-1/4'`">
          <div class="textgroup">
            <div class="flex gap-2">
              <div v-if="article.tags && article.tags[0]" class="label">
                {{ $t(`tags.${article.tags[0]}`) }}
              </div>
            </div>

            <h1>
              {{ article.title }}
            </h1>
          </div>
        </div>
      </div>

      <div class="textgroup">
        <p class="heading description">
          {{ article.description }}
        </p>

        <div class="details">
          <div class="author">
            {{ article.author }}
          </div>
          <div>
            {{ $t("post.posted") }}: {{ formatDate(article.createdAt) }}
          </div>
          <div>
            {{ article.updatedAt ? `${ $t("post.updated") }: ${formatDate(article.updatedAt)}` : null }}
          </div>
        </div>
      </div>
    </header>

    <div class="textgroup">
      <details v-if="article.showToc" class="px-4 mb-4 toc">
        <summary class="text-md h5">
          {{ $t("post.toc") }}
        </summary>

        <nav class="toc-nav">
          <ul class="toc-list">
            <li v-for="link of article.toc" :key="link.id" class="toc-list-item">
              <NuxtLink
                :to="`#${link.id}`"
                :class="['toc-link', { 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }]"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </details>
    </div>

    <nuxt-content
      :document="article"
      class="post-body"
    />

    <footer class="post-footer">
      <div class="textgroup">
        <hr>
      </div>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { DateTime, Interval } from "luxon";

export default defineComponent({
  async asyncData ({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },

  computed: {
    headerHeightClass () {
      // @ts-ignore
      if (this.article && this.article.img && this.article.img.headerImgHeight) {
        // @ts-ignore
        switch (this.article.img.headerImgHeight) {
          case "1/4":
            return "h-screen-1/4";
          case "1/3":
            return "h-screen-1/3";
          case "1/2":
            return "h-screen-1/2";
          case "2/3":
            return "h-screen-2/3";
          case "3/4":
            return "h-screen-3/4";
          default:
            return "h-screen-2/3";
        }
      } else {
        return "h-screen-1/4";
      }
    },
  },

  methods: {
    formatDate (date: string) {
      const dateTime = DateTime.fromISO(date);
      const now = DateTime.now();

      const parseParams: {
        year?: "numeric";
        month?: "long";
        day?: "numeric";
      } = {};

      if (dateTime.day === now.day) {
        const hoursDuration = Math.ceil(Interval.fromDateTimes(dateTime, now).length("hours"));
        const hoursAgo = isNaN(hoursDuration) ? 1 : hoursDuration;

        return `${hoursAgo} ${this.$i18n.tc("post.hoursAgo", hoursAgo)}`;
      } else {
        parseParams.day = "numeric";
      }

      if (dateTime.daysInYear < now.daysInYear && dateTime.daysInYear >= now.daysInYear - 7) {
        const daysDuration = Math.round(Interval.fromDateTimes(dateTime, now).length("days"));
        const daysAgo = isNaN(daysDuration) ? 1 : daysDuration;

        return `${daysAgo} ${this.$i18n.tc("post.daysAgo", daysAgo)}`;
      } else {
        parseParams.month = "long";
      }

      if (dateTime.year !== now.year) {
        parseParams.year = "numeric";
      }

      return dateTime.setLocale(this.$i18n.locale).toLocaleString(parseParams);
    },
  },
});
</script>

<style lang="postcss">
.post {
  @apply flex flex-col items-center justify-start gap-3 mx-auto w-full;

  .textgroup {
    @apply flex flex-col gap-3 mx-auto w-full max-w-screen-sm px-6 md:px-8;
  }

  .label {
    @apply
      rounded-full mb-2 py-1 px-2 w-max
      font-semibold text-xs bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100
      select-none
    ;

    letter-spacing: 0.5px;
  }

  .toc {
    @apply rounded mb-8 py-4 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300;

    transition: background 500ms ease-out, color 500ms ease-in;

    .toc-nav {
      @apply mt-2;
    }

    .toc-list {
      @apply ml-6;
    }

    a:link,
    a:hover,
    a:focus {
      @apply border-none text-gray-700 dark:text-gray-300;
    }

    &:hover,
    &:focus-within {
      @apply bg-gray-200 dark:bg-gray-800;

      & summary {
        @apply cursor-pointer outline-none;
      }
    }
  }

  figure {
    @apply flex flex-col items-center justify-end relative mx-auto w-full max-w-screen-2xl overflow-x-hidden
      text-center
    ;

    img,
    figcaption {
      @apply mx-auto;
    }

    figcaption {
      @apply
        absolute top-0 right-0 rounded-full m-3 py-1 px-3 w-max max-w-none
        bg-black bg-opacity-50 text-gray-200 text-xs
      ;
    }
  }

  &-header {
    @apply relative flex flex-col gap-5 w-full mb-8;

    .post-header-background {
      @apply relative bg-gray-50 dark:bg-gray-950;
    }

    .post-header-front {
      @apply
        absolute top-0 left-auto
        flex flex-col items-end justify-end
        pb-8 w-full h-full
        text-gray-950 dark:text-gray-50
      ;
    }

    .textgroup {
      @apply sm:px-0;
    }

    .description {
      @apply text-lg font-semibold text-gray-700 sm:text-xl dark:text-gray-300;
    }

    .details {
      @apply
        flex flex-wrap gap-3
        my-2 w-max max-w-full
        font-semibold text-xs text-gray-700 dark:text-gray-300
      ;
    }

    .gradient {
      &::after {
        background: var(--bg-color, #f8fafc);
        background: linear-gradient(to top, var(--bg-color, #010810) 10%, rgba(255, 255, 255, 0) 50%);
        content: "";

        @apply block absolute bottom-0 left-0 w-full h-full;
      }
    }
  }

  &-body {
    @apply relative;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply relative mx-auto w-full max-w-screen-sm mt-8 px-6 md:px-8;

      .icon.icon-link {
        @apply
          block absolute top-0 -left-5 w-4 h-full
          bg-no-repeat bg-center text-gray-500
          opacity-0 invisible
        ;

        background-image: url("https://raw.githubusercontent.com/sschoger/heroicons-ui/master/svg/icon-hashtag.svg");
      }

      a:link,
      a:hover,
      a:focus {
        @apply border-none text-gray-500;
      }

      &:hover,
      &:focus {
        .icon.icon-link {
          @apply opacity-50 visible;
        }
      }
    }

    h2 {
      @apply mb-4 text-2xl;
    }

    h3 {
      @apply mb-3 text-xl;
    }

    h4 {
      @apply mb-3 text-lg;
    }

    h4,
    h5,
    h6 {
      @apply mb-2;
    }

    p {
      @apply mx-auto w-full max-w-screen-sm mb-2 justify-between px-6 md:px-8;

      &:first-child::first-letter {
        @supports (initial-letter: 3) {
          initial-letter: 3;
        }
      }
    }

    blockquote p {
      @apply md:p-0;
    }

    figure {
      @apply mx-auto w-full max-w-screen-lg;

      img,
      figcaption {
        @apply w-full;
      }
    }

    .nuxt-content-highlight {
      @apply relative my-8;

      max-width: 100vw;

      pre {
        @apply bg-gray-100 dark:bg-gray-900;

        code {
          @apply dark:text-gray-50;

          text-shadow: none;

          .token.operator {
            @apply bg-transparent;
          }
        }
      }

      .filename {
        @apply absolute right-0 text-gray-500 font-light z-10 mr-3 mt-2 text-sm;

        & ~ pre {
          @apply pt-10;
        }
      }
    }
  }
}
</style>
