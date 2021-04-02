<i18n lang="yaml">
en:
  posted: "Posted"
  updated: "Edited"
  toc: "Table of Contents"
  category: "Category"
  tags: "Tags"
nl:
  posted: "Geplaatst"
  updated: "Aangepast"
  toc: "Inhoudsopgave"
  category: "Categorie"
  tags: "Labels"
</i18n>

<template>
  <article class="post">
    <header class="post-header">
      <div class="post-header-wrapper">
        <LazyHeaderImage
          v-if="article.img && article.img.src"
          :alt="article.img.alt"
          :src-set="Object.entries(article.img.srcSet)"
          :src="article.img.src"
          :bg-color="article.image && article.image.bgColor ? article.image.bgColor : null"
          :gradient="true"
        />

        <div class="post-header-content">
          <TextGroup class="px-6 sm:px-0">
            <TagLabel
              v-if="article.tags && article.tags[0]"
              :invert="true"
            >
              {{ $t(`tagList.${article.tags[0]}`) }}
            </TagLabel>

            <h1>
              {{ article.title }}
            </h1>
          </TextGroup>
        </div>
      </div>

      <TextGroup class="max-w-screen-sm px-6 mx-auto sm:px-0">
        <ArticleLead>
          {{ article.description }}
        </ArticleLead>

        <PostDetails>
          <div>
            {{ article.author }}
          </div>

          <PostReadingTime :text="JSON.stringify(article)" />

          <PostDate
            :iso-date="article.createdAt"
            :label="`${$t('posted')}:`"
            :show-label="false"
          />

          <PostDate
            v-if="article.updatedAt"
            :iso-date="article.updatedAt"
            :label="`${$t('updated')}:`"
          />
        </PostDetails>
      </TextGroup>
    </header>

    <TextGroup class="px-6">
      <Collapsible v-if="article.showToc" class="px-4 mb-8">
        <template #summary>
          {{ $t("toc") }}
        </template>

        <template #content>
          <ToC :items="article.toc" class="mt-4" />
        </template>
      </Collapsible>
    </TextGroup>

    <main class="post-body">
      <nuxt-content :document="article" />
    </main>

    <footer class="post-footer">
      <TextGroup class="flex flex-col flex-wrap items-center text-center">
        <hr class="w-3/4 mx-auto mb-1">

        <div class="flex flex-wrap justify-center gap-2 mt-2 mb-8">
          <TagLabel v-for="tag of article.tags" :key="tag">
            {{ $t(`tagList.${tag}`) }}
          </TagLabel>
        </div>
      </TextGroup>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  async asyncData ({ $content, params }: any) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },

  head () {
    return {
      // @ts-ignore
      title: `${this.article.title} | Ruben Sibon`,
      meta: [
        {
          hid: "description",
          name: "description",
          // @ts-ignore
          content: this.article.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          // @ts-ignore
          content: this.article.tags,
        },
      ],
    };
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
    .post-header-wrapper {
      @apply relative flex justify-center min-h-screen-1/4 bg-gray-50 dark:bg-gray-950;
    }

    .post-header-content {
      @apply absolute top-0 left-auto
        flex flex-col items-start justify-end
        pb-8 max-w-screen-sm w-full min-h-screen-1/4 h-full
        text-gray-950 dark:text-gray-50
      ;
    }
  }

  &-body {
    @apply max-w-screen-sm mb-8;

    .nuxt-content-container {
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

          background-image: url("~/assets/icons/link.svg");
        }

        a:link,
        a:hover,
        a:focus {
          @apply border-none text-gray-500;
        }

        &:hover,
        &:focus {
          .icon.icon-link {
            @apply opacity-100 visible;
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
        @apply relative -left-6 sm:-left-8 rounded my-12 max-w-screen-lg;

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
            @apply text-gray-950 dark:text-gray-50;

            text-shadow: none;

            .token.operator {
              @apply bg-transparent;
            }
          }
        }

        .filename {
          @apply absolute right-0 z-10 mt-2 mr-3
            font-light text-gray-600 dark:text-gray-400 text-sm tracking-widest;

          & ~ pre {
            @apply pt-10;
          }
        }
      }
    }
  }
}
</style>
