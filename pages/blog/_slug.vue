<template>
  <article class="post">
    <header class="relative post-header">
      <div
        :class="headerHeightClass"
        :style="{
          'background-color': article.headerBgColor ? article.headerBgColor : 'black'
        }"
      >
        <figure
          v-if="article.img && article.img.src"
          :class="headerHeightClass"
        >
          <picture>
            <source
              v-for="[media, src] in Object.entries(article.img.srcSet)"
              :key="media"
              :media="`(orientation: ${media})`"
              :srcset="src"
            >
            <img
              :src="article.img.src"
              :alt="article.img.alt"
              :class="[article.img.width ? article.img.width : 'max-w-screen-lg']"
              :style="article.img.bgColor ? `background-color: ${article.img.bgColor}` : null"
            >
          </picture>

          <!-- <caption>
            {{ article.img.alt }}
          </caption> -->
        </figure>
      </div>

      <div
        :class="`absolute top-0 left-0 flex flex-col items-end justify-end w-full h-screen-2/3 pb-6 ${headerHeightClass}`"
      >
        <div class="textgroup">
          <div class="category label">
            {{ $t(`categories.${article.category}`) }}
          </div>

          <h1 class="text-gray-50">
            {{ article.title }}
          </h1>
        </div>
      </div>

      <div class="textgroup">
        <p class="heading h3">
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
      return `h-screen-${this.article && this.article.img && this.article.img.headerImgHeight
        ? this.article.img.headerImgHeight
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

  figure {
    @apply flex flex-col items-center justify-end relative mx-auto w-full
      text-center
    ;

    img,
    caption {
      @apply mx-auto w-full;
    }

    caption {
      @apply
        absolute rounded-full m-3 py-1 px-3 w-max max-w-none
        bg-black bg-opacity-75 text-gray-200 text-sm
      ;
    }
  }

  .label {
    @apply
      rounded-full py-2 px-3 w-max
      text-xs bg-gray-900 text-gray-100 font-semibold
    ;

    letter-spacing: 0.5px;
  }

  &-header,
  &-footer {
    @apply relative flex flex-col gap-5 w-full mb-4;

    .category {
      @apply uppercase;
    }

    .details {
      @apply
        flex gap-3
        my-2 w-max
        font-semibold text-xs
      ;
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
      @apply mx-auto w-full max-w-screen-sm mt-8 px-6 md:px-8;
    }

    p {
      @apply mx-auto w-full max-w-screen-sm mb-2 justify-between px-6 md:px-8;
    }

    h2 {
      @apply mb-4 text-2xl;
    }

    h3 {
      @apply mb-3 text-xl;
    }

    h4,
    h5,
    h6 {
      @apply mb-2;
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
