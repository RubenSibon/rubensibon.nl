<template>
  <SlideScreen
    class="articles"
    :adjacent="{
      left: '/',
    }"
  >
    <header>
      <Nav on-side="left">
        <nuxt-link :to="localePath('/')" class="link">
          <Icon svg-icon="SvgIconChevronLeft" :large="true" aria-hidden="true" />

          <Icon svg-icon="SvgIconHome" :large="true" aria-hidden="true" />

          <span class="sr-only">⬅ Home&nbsp;</span>
        </nuxt-link>
      </Nav>

      <h1>
        {{ $t("Articles") }}
      </h1>
    </header>

    <main v-if="articles.length">
      <nuxt-link
        v-for="article in articles"
        :key="article.slug"
        :to="article.lang === locale ? localePath(`/articles/${article.slug}`) : `/${defaultLocale}/articles/${article.slug}`"
        :title="article.title"
        class="📰"
      >
        <!-- <HeaderImage
          v-if="article.img && article.img.src"
          :alt="article.img.alt"
          :src-set="Object.entries(article.img.srcSet)"
          :src="article.img.src"
          :bg-color="article.image && article.image.bgColor ? article.image.bgColor : null"
          :gradient="true"
          class="📰-figure"
        /> -->

        <div class="📰-content">
          <h2 class="title">
            {{ article.title }}
          </h2>

          <div class="list">
            <div>
              {{ formatDate(article.createdAt) }}
            </div>

            <div v-if="article.tags">
              {{ $t(`tagList.${article.tags[0]}`) }}
            </div>
          </div>

          <div>
            <p>{{ article.description }}</p>
          </div>

          <div v-if="article.tags" class="flex-wrap hidden gap-2 sm:flex">
            <span>{{ $t("Tags") }}:</span><span v-for="tag of article.tags" :key="tag">{{ $t(`tagList.${tag}`) }}</span>
          </div>
        </div>
      </nuxt-link>
    </main>
    <main v-else>
      Loading articles...
    </main>
  </SlideScreen>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  nuxtI18n: {
    paths: {
      en: "/articles",
      nl: "/artikelen",
    },
  },

  asyncData ({ i18n }) {
    const locale = i18n.locale;
    const defaultLocale = i18n.defaultLocale;

    return {
      locale,
      defaultLocale,
    };
  },

  data () {
    return {
      articles: [] as string[],
    };
  },

  async fetch () {
    const addLangProp = (lang: string) => (article: any) => {
      article.lang = lang;
      return article;
    };

    const localeArticles = (await this.$content(`${this.$i18n.locale}/articles`).fetch() as any[])
      .map(addLangProp(this.$i18n.locale))
    ;

    let defaultLocaleArticles = [];

    if (this.$i18n.defaultLocale !== this.$i18n.locale) {
      const defaultArticles = (await this.$content(`${this.$i18n.defaultLocale}/articles`).fetch() as any[]);

      defaultLocaleArticles = defaultArticles
        .filter(dA => dA.slug !== localeArticles.find(locA => locA.slug === dA.slug)?.slug)
        .map(addLangProp(this.$i18n.defaultLocale));
    }

    this.articles = [...localeArticles, ...defaultLocaleArticles];
  },

  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: `${this.$t("Articles")} ${this.$t("by")} Ruben Sibon`,
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        ...i18nHead.meta,
      ],
      link: [
        ...i18nHead.link,
      ],
    };
  },

  methods: {
    formatDate (date: Date) {
      return new Date(date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
    },
  },
});
</script>

<style lang="postcss" scoped>
.articles {
  @apply w-full max-w-screen-2xl mx-auto p-5;

  min-height: var(--vp-height, 100vh);

  header {
    @apply flex items-center justify-between mb-8 sm:mb-16;
  }

  main {
    @apply grid grid-cols-2 gap-8 mx-auto mb-12 max-w-screen-lg;

    .📰 {
      @apply relative aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-9;

      &:first-child {
        @apply col-span-2;
      }

      &-figure {
        @apply absolute top-0 left-0 w-full h-auto;
      }

      &-content {
        @apply flex flex-col gap-3 justify-end
          absolute left-0 bottom-0 p-4 sm:p-8
          w-full h-full;

        .list {
          @apply flex flex-wrap items-center gap-3;
        }
      }
    }
  }
}
</style>
