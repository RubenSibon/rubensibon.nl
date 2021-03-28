<template>
  <main class="mx-auto px-4 sm:px-8 max-w-screen-md">
    <h1>Blog</h1>

    <nuxt-link
      v-for="article in articles"
      :key="article.slug"
      :to="localePath(`/blog/${article.slug}`)"
      :title="article.title"
    >
      <h2 class="text-3xl">
        {{ article.title }}
      </h2>

      <p>{{ article.description }}</p>

      <p class="text-sm">
        <span>{{ $t("posted") }}: {{ formatDate(article.createdAt) }}</span>,
        <span>{{ $t("updated") }}: {{ formatDate(article.updatedAt) }}</span>
      </p>
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

  methods: {
    formatDate (date: Date) {
      return new Date(date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
    },
  },
});
</script>
