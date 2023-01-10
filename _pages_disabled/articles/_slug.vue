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
  <article class="flex flex-col items-center justify-start w-full mx-auto">
    <SectionSemantic tag="header">
      <div class="relative flex justify-center min-h-screen-1/4 bg-gray-50 dark:bg-gray-950">
        <HeaderImage
          v-if="article.img && article.img.src"
          :alt="article.img.alt"
          :src-set="Object.entries(article.img.srcSet)"
          :src="article.img.src"
          :bg-color="article.image && article.image.bgColor ? article.image.bgColor : null"
          :gradient="true"
        />

        <div class="absolute top-0 left-0 flex flex-col items-start justify-end w-full h-full pb-8 min-h-screen-1/4 text-gray-950 dark:text-gray-50">
          <TextGroup class="px-6 header-textgroup sm:px-8 md:px-0">
            <div class="flex">
              <TagLabel v-if="article.tags && article.tags[0]">
                {{ $t(`tagList.${article.tags[0]}`) }}
              </TagLabel>
            </div>

            <h1>
              {{ article.title }}
            </h1>
          </TextGroup>
        </div>
      </div>

      <TextGroup class="px-6 sm:px-8 md:px-0">
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

      <Nav on-side="left" class="absolute top-0 left-0 w-full pt-5 pl-5">
        <div class="w-full mx-auto max-w-screen-2xl">
          <nuxt-link :to="localePath('/articles')" class="link">
            <Icon svg-icon="SvgIconChevronLeft" :large="true" aria-hidden="true" />

            <span>Back</span>

            <span class="sr-only">⬅ Home&nbsp;</span>
          </nuxt-link>

          <h1>&nbsp;</h1>
        </div>
      </Nav>
    </SectionSemantic>

    <TextGroup v-if="article.showToc" class="px-6 mb-8 sm:px-8 md:px-0">
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

    <main class="mb-8">
      <nuxt-content
        :document="article"
        class="max-w-screen-sm px-6 sm:px-12 sm:max-w-screen-md"
      />
    </main>

    <SectionSemantic tag="footer">
      <TextGroup class="flex-wrap items-center px-6 text-center sm:px-8 md:px-0">
        <hr class="w-3/4 mx-auto mb-1">

        <div class="flex flex-wrap justify-center gap-2 mt-2 mb-8 ie-gap-horizontal-sm">
          <TagLabel v-for="tag of article.tags" :key="tag">
            {{ $t(`tagList.${tag}`) }}
          </TagLabel>
        </div>
      </TextGroup>
    </SectionSemantic>
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

  async asyncData ({ $content, i18n, params }) {
    const article = await $content(`${i18n.locale}/articles`, params.slug).fetch();

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
.header-textgroup {
  filter: drop-shadow(0 0 0.125rem black);
}

nav {
  & > div {
    filter: drop-shadow(0 0 0.125rem black);
  }
}
</style>
