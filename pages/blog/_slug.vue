<template>
  <article class="post">
    <header class="post-header">
      <h1 class="mb-4">
        {{ article.title }}
      </h1>

      <p class="mb-2 heading h5">
        {{ article.description }}
      </p>

      <div class="mb-4 post-details">
        {{ $t("posted") }} {{ formatDate(article.createdAt) }},
        {{ article.updatedAt ? `${ $t("updated") } ${formatDate(article.updatedAt)}` : null }}
      </div>

      <figure v-if="article.img">
        <img :src="article.img" :alt="article.alt">
        <caption>Beeld: {{ article.alt }}</caption>
      </figure>
    </header>

    <nuxt-content
      :document="article"
      class="post-body"
    />

    <footer class="post-footer">
      <p class="post-author">
        {{ article.author }}
      </p>

      <div class="post-details">
        {{ $t("posted") }} {{ formatDate(article.createdAt) }},
        {{ article.updatedAt ? `${ $t("updated") } ${formatDate(article.updatedAt)}` : null }}
      </div>
    </footer>
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
      return new Date(date).toLocaleDateString(this.$i18n.locale, { year: "numeric", month: "long", day: "numeric" });
    },
  },
});
</script>

<style lang="postcss">
.post {
  @apply flex flex-col items-center justify-start mx-auto w-full;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    @apply mx-auto w-full max-w-screen-sm px-6 md:px-8;
  }

  figure,
  picture,
  img,
  caption {
    @apply mx-auto w-full max-w-screen-md;
  }

  &-header,
  &-footer {
    @apply w-full mb-4;

    figure caption {
      @apply text-gray-300 text-right pr-4 pb-2 text-xs;

      transform: translateY(-100%);
      text-shadow: -1px -1px 2px black;
    }

    .post-details {
      @apply
        flex items-start justify-start gap-2 max-w-screen-sm mx-auto px-6 md:px-8
        text-sm
      ;
    }
  }

  &-body {
    h2 {
      @apply font-bold text-3xl;
    }

    h3 {
      @apply font-bold text-xl;
    }

    p {
      margin-bottom: 20px;
    }
  }
}
</style>
