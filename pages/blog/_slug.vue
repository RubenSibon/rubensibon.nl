<template>
  <article class="post">
    <header class="relative post-header">
      <div
        :class="article.headerHeightClass || 'h-screen-2/3'"
        :style="[
          article.headerBgColor ? { 'background-color': article.headerBgColor } : null,
        ]"
      >
        <figure
          v-if="article.img && article.img.src"
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
        :class="`absolute top-0 flex flex-col items-end justify-end w-full pb-6 ${article.headerHeightClass || 'h-screen-2/3'}`"
      >
        <div class="textgroup">
          <div class="label">
            {{ $t(`categories.${article.category}`) }}
          </div>

          <h1 class="text-gray-100">
            {{ article.title }}
          </h1>
        </div>
      </div>

      <div class="textgroup">
        <p class="heading h3">
          {{ article.description }}
        </p>
      </div>
    </header>

    <nuxt-content
      :document="article"
      class="post-body"
    />

    <footer class="post-footer">
      <div class="textgroup">
        <hr>

        <div class="details">
          <p class="author">
            {{ article.author }}
          </p>
          <p>
            {{ $t("post.postedOn") }} {{ formatDate(article.createdAt) }}
          </p>
          <p>
            {{ article.updatedAt ? `${ $t("post.updatedOn") } ${formatDate(article.updatedAt)}` : null }}
          </p>
        </div>
      </div>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  async asyncData ({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },

  methods: {
    formatDate (date: Date) {
      return new Date(date).toLocaleDateString(this.$i18n.locale, { year: "numeric", month: "long", day: "numeric" });
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
    @apply flex flex-col items-center justify-end relative mx-auto w-full max-h-screen-2/3
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
      text-xs bg-gray-100 text-gray-500 font-semibold
    ;
  }

  &-header,
  &-footer {
    @apply relative flex flex-col gap-5 w-full mb-4;

    .details {
      @apply
        flex flex-col
        w-max min-w-1/2
        text-xs font-semibold
      ;

      .author {
        @apply mb-3 font-semibold text-xs;
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
