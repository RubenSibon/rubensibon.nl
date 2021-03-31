<template>
  <article class="post">
    <header class="post-header">
      <div :class="['post-header-background']">
        <HeaderImage
          v-if="article.img && article.img.src"
          :alt="article.img.alt"
          :src-set="Object.entries(article.img.srcSet)"
          :src="article.img.src"
          :bg-color="article.image && article.image.bgColor ? article.image.bgColor : null"
          :gradient="true"
        />

        <!-- Below div ensures that the positioned header has height when there is no header image. -->
        <div v-else :class="['min-h-screen-1/4']" />

        <div class="max-w-screen-sm post-header-front min-h-screen-1/4">
          <TextGroup :no-padding-x="['sm']">
            <div class="flex gap-2">
              <TagLabel
                v-if="article.tags && article.tags[0]"
                :invert="true"
                class="mb-2"
              >
                {{ $t(`tags.${article.tags[0]}`) }}
              </TagLabel>
            </div>

            <h1>
              {{ article.title }}
            </h1>
          </TextGroup>
        </div>
      </div>

      <TextGroup :no-padding-x="['sm']" class="max-w-screen-sm mx-auto">
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

    <TextGroup>
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
      <TextGroup class="flex flex-col flex-wrap items-center text-center">
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
          <TagLabel v-for="tag of article.tags" :key="tag">
            {{ $t(`tags.${tag}`) }}
          </TagLabel>
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
    TagLabel: () => import("~/components/global/TagLabel.vue"),
    PostDate: () => import("~/components/global/PostDate.vue"),
    PostDetails: () => import("~/components/global/PostDetails.vue"),
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

  &-header,
  &-footer {
    @apply relative flex flex-col gap-5 w-full mb-8;
  }

  &-header {
    .post-header-background {
      @apply relative flex justify-center bg-gray-50 dark:bg-gray-950;
    }

    .post-header-front {
      @apply absolute top-0 left-auto
        flex flex-col items-start justify-end
        pb-8 w-full h-full
        text-gray-950 dark:text-gray-50
      ;
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
        @apply block absolute top-0 -left-5 w-4 h-full
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
      @apply relative mx-auto w-full max-w-screen-sm mb-2 justify-between px-6 md:px-8;

      &:first-child::first-letter {
        @supports (initial-letter: 3) {
          initial-letter: 3;
        }
      }
    }

    blockquote p {
      @apply md:p-0;
    }

    p img {
      @apply relative -left-6 sm:-left-8 my-12 max-w-screen-lg;

      width: calc(100% + 3rem);

      @screen sm {
        width: calc(100% + 4rem);
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
