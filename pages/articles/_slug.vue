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
    <header>
      <div class="header-wrapper">
        <HeaderImage
          v-if="article.img && article.img.src"
          :alt="article.img.alt"
          :src-set="Object.entries(article.img.srcSet)"
          :src="article.img.src"
          :bg-color="article.image && article.image.bgColor ? article.image.bgColor : null"
          :gradient="true"
        />

        <div class="content">
          <TextGroup>
            <div class="flex">
              <TagLabel
                v-if="article.tags && article.tags[0]"
                :invert="true"
              >
                {{ $t(`tagList.${article.tags[0]}`) }}
              </TagLabel>
            </div>

            <h1>
              {{ article.title }}
            </h1>
          </TextGroup>
        </div>
      </div>

      <TextGroup>
        <ArticleLead>
          {{ article.description }}
        </ArticleLead>

        <PostDetails class="ie-gap-horizontal">
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

    <TextGroup v-if="article.showToc" class="px-6 mb-8">
      <ToC :items="article.toc" class="hidden" />
      <Collapsible>
        <template #summary>
          {{ $t("toc") }}
        </template>

        <template #content>
          <ToC :items="article.toc" class="mt-4" />
        </template>
      </Collapsible>
    </TextGroup>

    <main>
      <nuxt-content :document="article" />
    </main>

    <footer>
      <TextGroup>
        <hr class="w-3/4 mx-auto mb-1">

        <div class="taglist ie-gap-horizontal-sm">
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

interface Article {
  author: string;
  body: {
    children: any[];
    type: "root";
  };
  createdAt: string;
  description: string;
  dir: string;
  extension: ".md" | ".txt";
  img: {
    alt: string;
    src: string;
    srcSet: any;
  }
  path: string;
  showToc: boolean;
  slug: string;
  tags: string[];
  title: string;
  toc: any[]
  updatedAt: string;
};

export default defineComponent({
  nuxtI18n: {
    paths: {
      en: "/articles/:slug",
      nl: "/artikelen/:slug",
    },
  },

  async asyncData ({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },

  // @ts-ignore
  head () {
    return {
      title: `${(this.article as Article).title} ${this.$t("by")} Ruben Sibon`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this.article as Article).description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: (this.article as Article).tags,
        },
      ],
    };
  },
});
</script>

<style lang="postcss" scoped>
.post {
  @apply flex flex-col items-center justify-start mx-auto w-full;

  header,
  footer {
    @apply relative flex flex-col w-full mb-8;
  }

  header {
    .header-wrapper {
      @apply relative flex justify-center min-h-screen-1/4 bg-gray-50 dark:bg-gray-950;

      .content {
        @apply absolute top-0 left-0
          flex flex-col items-start justify-end
          pb-8 w-full min-h-screen-1/4 h-full
          text-gray-950 dark:text-gray-50
        ;
      }
    }

    .textgroup {
      @apply max-w-screen-sm mx-auto px-6 sm:px-0;
    }
  }

  main {
    @apply mb-8 max-w-screen-sm;
  }

  footer {
    .textgroup {
      @apply flex flex-col flex-wrap items-center text-center;
    }

    .taglist {
      @apply flex flex-wrap justify-center gap-2 mt-2 mb-8;
    }
  }
}
</style>

<style lang="postcss">
.nuxt-content {
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
    @apply mb-4;
  }

  h3 {
    @apply mb-3;
  }

  h4 {
    @apply mb-3;
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
    max-width: 100vw;

    @screen sm {
      width: calc(100% + 4rem);
    }
  }

  .nuxt-content-highlight {
    @apply relative my-8 max-w-screen;

    pre {
      @apply bg-gray-100 dark:bg-gray-900;

      max-width: 100vw;

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
</style>
