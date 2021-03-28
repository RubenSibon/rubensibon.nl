<template>
  <article class="mx-auto px-4 sm:px-8 max-w-screen-md">
    <div class="mb-4">
      <h1 class="mb-4">
        {{ article.title }}
      </h1>

      <p class="mb-2">
        {{ article.description }}
      </p>

      <img v-if="article.img" :src="article.img" :alt="article.alt">

      <p class="text-sm">
        <span>Written by {{ article.author }} ⋅</span>
        <span>{{ $t("posted") }}: {{ formatDate(article.createdAt) }} ⋅</span>
        <span>{{ $t("updated") }}: {{ formatDate(article.updatedAt) }} ⋅</span>
      </p>
    </div>

    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  async asyncData ({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },

  methods: {
    formatDate (date: Date) {
      return new Date(date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
    },
  },
});
</script>

<style lang="postcss">
.nuxt-content h2 {
  @apply font-bold text-3xl;
}

.nuxt-content h3 {
  @apply font-bold text-xl;
}

.nuxt-content p {
  margin-bottom: 20px;
}
</style>
