<template>
  <main class="blog">
    <h1>Blog</h1>

    <nuxt-link
      v-for="article in articles"
      :key="article.slug"
      :to="localePath(`/blog/${article.slug}`)"
      :title="article.title"
      class="flex flex-col gap-3"
    >
      <h2 class="text-2xl">
        {{ article.title }}
      </h2>

      <div class="flex items-center gap-3 text-sm">
        <div class="font-semibold">
          {{ formatDate(article.createdAt) }}
        </div>

        <div v-if="article.tags" class="font-semibold">
          {{ $t(`tags.${article.tags[0]}`) }}
        </div>
      </div>

      <div class="text-sm">
        <p>{{ article.description }}</p>
      </div>

      <div v-if="article.tags" class="flex gap-1 text-xs">
        <span class="font-semibold">{{ $t("post.tags") }}:</span><span v-for="tag of article.tags" :key="tag">{{ $t(`tags.${tag}`) }}</span>
      </div>
    </nuxt-link>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  async asyncData ({ $content }) {
    const articles = await $content("articles").fetch();

    return { articles };
  },

  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: "Blog - Ruben Sibon",
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
.blog {
  @apply w-full max-w-screen-md px-4 mx-auto sm:px-8;
}
</style>
