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
        :to="localePath(`/articles/${article.slug}`)"
        :title="article.title"
        class="📰"
      >
        <h2 class="📰-title">
          {{ article.title }}
        </h2>

        <div class="📰-list">
          <div class="font-semibold">
            {{ formatDate(article.createdAt) }}
          </div>

          <div v-if="article.tags" class="font-semibold">
            {{ $t(`tagList.${article.tags[0]}`) }}
          </div>
        </div>

        <div class="text-sm">
          <p>{{ article.description }}</p>
        </div>

        <div v-if="article.tags" class="flex gap-1 text-xs">
          <span class="font-semibold">{{ $t("Tags") }}:</span><span v-for="tag of article.tags" :key="tag">{{ $t(`tagList.${tag}`) }}</span>
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

  data () {
    return {
      articles: [],
    };
  },

  async fetch () {
    this.articles = (await this.$content("articles").fetch() as any);
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
    @apply flex flex-col;

    .📰 {
      @apply flex flex-col gap-3;

      &-title {
        @apply text-2xl;
      }

      &-list {
        @apply flex items-center gap-3 text-sm;
      }
    }
  }
}
</style>
