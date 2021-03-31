<template>
  <article class="post">
    <header class="post-header">
      <div :class="['post-header-background']">
        <figure
          v-if="article.img && article.img.src"
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
                'min-h-screen-2/3',
                'w-screen',
                article.img.bgColor ? `bg-${article.img.bgColor}` : null,
              ]"
            >
          </picture>

          <figcaption>
            {{ article.img.alt }}
          </figcaption>
        </figure>

        <!-- Below div ensures that the positioned header has height when there is no header image. -->
        <div v-else :class="['min-h-screen-1/4']" />

        <div class="post-header-front min-h-screen-1/4">
          <TextGroup class="textgroup sm:px-0">
            <div class="flex gap-2">
              <Label
                v-if="article.tags && article.tags[0]"
                :invert="true"
                class="mb-2"
              >
                {{ $t(`tags.${article.tags[0]}`) }}
              </Label>
            </div>

            <h1>
              {{ article.title }}
            </h1>
          </TextGroup>
        </div>
      </div>

      <TextGroup class="textgroup sm:px-0">
        <ArticleLead>
          {{ article.description }}
        </ArticleLead>

        <PostDetails>
          <div>
            {{ article.author }}
          </div>

          <PostDate :iso-date="article.createdAt">
            <template #label>
              {{ $t("post.posted") }}:
            </template>
          </PostDate>

          <PostDate v-if="article.updatedAt" :iso-date="article.updatedAt">
            <template #label>
              {{ $t("post.updated") }}:
            </template>
          </PostDate>
        </PostDetails>
      </TextGroup>
    </header>

    <TextGroup class="textgroup">
      <Collapsible v-if="article.showToc" class="px-4 mb-8">
        <template #summary>
          {{ $t("post.toc") }}
        </template>

        <template #content>
          <ToC :items="article.toc" class="mt-4" />
        </template>
      </Collapsible>
    </TextGroup>

    <nuxt-content
      :document="article"
      class="post-body"
    />

    <footer class="post-footer">
      <TextGroup class="flex flex-col flex-wrap items-center text-center textgroup">
        <hr class="w-3/4 mx-auto border-dashed">

        <PostDetails class="items-center justify-center">
          <div>
            {{ article.author }}
          </div>

          <PostDate :iso-date="article.createdAt">
            <template #label>
              {{ $t("post.posted") }}:
            </template>
          </PostDate>
        </PostDetails>

        <div class="flex flex-wrap justify-center gap-2 mt-2">
          <Label v-for="tag of article.tags" :key="tag">
            {{ $t(`tags.${tag}`) }}
          </Label>
        </div>
      </TextGroup>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    ArticleLead: () => import("~/components/global/ArticleLead.vue"),
    Collapsible: () => import("~/components/global/Collapsible.vue"),
    Label: () => import("~/components/global/Label.vue"),
    PostDetails: () => import("~/components/global/PostDetails.vue"),
    PostDate: () => import("~/components/global/PostDate.vue"),
    TextGroup: () => import("~/components/global/TextGroup.vue"),
    ToC: () => import("~/components/global/ToC.vue"),
  },

  async asyncData ({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
});
</script>

<style lang="postcss">
.post {
  @apply flex flex-col items-center justify-start gap-3 mx-auto w-full;

  figure {
    @apply flex flex-col items-center justify-end relative mx-auto w-full overflow-x-hidden
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

  &-header,
  &-footer {
    @apply relative flex flex-col gap-5 w-full mb-8;
  }

  &-header {
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
    @apply relative mb-8;

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
