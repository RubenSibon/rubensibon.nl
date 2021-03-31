<template>
  <article class="post">
    <header class="relative post-header">
      <div :class="['headerbg', headerHeightClass]">
        <figure
          v-if="article.img && article.img.src"
          ref="postHeaderFigure"
          :class="[headerHeightClass, 'max-w-screen-xl', 'gradient']"
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
                'min-w-screen-full',
                `min-${headerHeightClass}`,
                article.img.bgColor ? `bg-${article.img.bgColor}` : null,
              ]"
            >
          </picture>

          <figcaption>
            {{ article.img.alt }}
          </figcaption>
        </figure>
      </div>

      <div :class="`headertext ${headerHeightClass}`">
        <div class="textgroup">
          <div class="category label">
            {{ $t(`categories.${article.category}`) }}
          </div>

          <h1>
            {{ article.title }}
          </h1>
        </div>
      </div>

      <div class="mb-8 textgroup">
        <p class="text-xl font-semibold text-gray-700 heading dark:text-gray-300">
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
      return `h-screen-${this.article && this.article.img && this.article.img.headerImgHeight
        // @ts-ignore
        ? this.article.img.headerImgHeight
        // @ts-ignore
        : this.article.headerHeight || "2/3"}`;
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
      rounded-full py-2 px-3 w-max
      text-xs bg-gray-950 text-gray-100 font-semibold
    ;

    letter-spacing: 0.5px;
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
    @apply relative flex flex-col gap-5 w-full mb-4;

    .headertext {
      @apply
        absolute top-0 left-0
        flex flex-col items-end justify-end
        pb-8 w-full h-screen-2/3
        text-gray-950 dark:text-gray-50
      ;
    }

    .headerbg {
      @apply bg-gray-50 dark:bg-gray-950;
    }

    .textgroup {
      @apply sm:px-0;
    }

    .category {
      @apply uppercase;
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
        background: linear-gradient(to top, var(--bg-color, #010810) 10%, rgba(255, 255, 255, 0) 100%);
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

    .icon.icon-link {
      @apply
        block absolute top-0 -left-5 w-4 h-full
        bg-no-repeat bg-center text-gray-500
        opacity-0 invisible
      ;

      background-image: url("https://raw.githubusercontent.com/sschoger/heroicons-ui/master/svg/icon-hashtag.svg");
    }

    .nuxt-content-highlight {
      @apply my-8;

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
    }

    figure {
      @apply mx-auto w-full max-w-screen-lg;

      img,
      caption {
        @apply w-full;
      }
    }
  }
}
</style>
