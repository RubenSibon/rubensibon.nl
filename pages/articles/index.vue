<template>
  <SlideScreen
    class="articles"
    :adjacent="{
      left: '/',
      right: `${articles.length ? `articles/${articles[0].slug}` : ''}`,
    }"
  >
    <h1 class="articles-header">
      {{ $t("Articles") }}
    </h1>

    <template v-if="articles.length">
      <nuxt-link
        v-for="article in articles"
        :key="article.slug"
        :to="localePath(`articles/${article.slug}`)"
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
    </template>
    <template v-else>
      Loading articles...
    </template>
  </SlideScreen>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data () {
    return {
      articles: [],
    };
  },

  // @ts-ignore
  async fetch () {
    // @ts-ignore
    this.articles = await this.$content("articles").fetch();
  },

  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: `${this.$t("Articles")} ${this.$t("by")} Ruben Sibon`,
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        // @ts-ignore
        ...i18nHead.meta,
      ],
      link: [
        // @ts-ignore
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
  @apply w-full max-w-screen-2xl mx-auto p-5 h-screen;

  height: var(--vp-height);

  &-header {
    @apply mb-5;
  }

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
</style>
