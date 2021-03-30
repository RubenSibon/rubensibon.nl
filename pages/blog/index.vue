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
      <h2 class="text-3xl">
        {{ article.title }}
      </h2>

      <div class="flex items-center gap-3 text-sm">
        <div class="category">
          {{ article.category }}
        </div>

        <div>
          {{ formatDate(article.createdAt) }}
        </div>
      </div>

      <p>{{ article.description }}</p>
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

  .label {
    @apply font-semibold;
  }
}
</style>
