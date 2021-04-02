<template>
  <div class="min-h-screen mx-auto">
    <Nuxt />

    <footer class="flex items-center justify-start max-w-xl gap-3 p-5 mx-auto">
      <span>{{ $t("languages") }}:</span>
      <nuxt-link :to="switchLocalePath('en')">
        English
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('nl')">
        Nederlands
      </nuxt-link>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: `Ruben Sibon: ${this.$t("about.profession")}`,
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        // @ts-ignore
        ...i18nHead.meta,
        {
          hid: "description",
          name: "description",
          content: this.$t("description"),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `${this.$t("tagList.software_dev")},${this.$t("tagList.programming")},${this.$t("tagList.javascript")},${this.$t("tagList.typescript")},${this.$t("tagList.vuejs")},${this.$t("tagList.nuxtjs")},${this.$t("tagList.react")},${this.$t("tagList.react_native")},${this.$t("tagList.python")},${this.$t("tagList.linux")},${this.$t("tagList.foss")},${this.$t("tagList.open_source")}`,
        },
      ],
      link: [
        // @ts-ignore
        ...i18nHead.link,
      ],
    };
  },
});
</script>

<style lang="postcss">
html {
  @apply font-sans text-base sm:text-lg md:text-xl;

  box-sizing: border-box;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  @apply bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-100;

  --bg-color: theme("colors.gray.50");

  @screen dark {
    --bg-color: theme("colors.gray.950");
  }

  transition: background 250ms ease-out;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
.heading {
  @apply font-bold tracking-wide;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  transition: color 250ms ease-in;
}

h1,
.h1 {
  @apply text-4xl sm:text-6xl;
}

h2,
.h2 {
  @apply text-3xl sm:text-4xl;
}

h3,
.h3 {
  @apply text-2xl font-semibold;
}

h4,
.h4 {
  @apply text-xl font-semibold;
}

h5,
.h5 {
  @apply font-semibold tracking-wide;
}

h6,
.h6 {
  @apply font-normal tracking-wide;
}

blockquote {
  @apply relative my-12 ml-4 sm:ml-8
    font-serif text-2xl sm:text-3xl italic tracking-wide;
}

@screen md {
  blockquote {
    &::before {
      content: "“";

      @apply block absolute -top-2 -left-9 w-max h-8
        bg-transparent text-7xl text-gray-400 dark:text-gray-600 select-none;
    }
  }
}

pre {
  @apply rounded-xl bg-gray-200 dark:bg-gray-800;
}

code,
pre,
pre[class*=language-] {
  @apply font-code;

  transition: background 500ms ease-in, color 500ms ease-in;
}

a {
  @apply relative border-b-2 border-purple-500;

  transition: border 250ms ease-in, color 250ms ease-in;
  text-decoration: none;

  &:hover,
  &:focus {
    @apply border-dotted text-purple-500;
  }

  &:focus {
    @apply rounded border-transparent;

    outline: 2px solid currentColor;
  }
}

.button--grey {
  display: inline-block;
  margin-left: 15px;
  border: 1px solid #35495e;
  border-radius: 4px;
  padding: 10px 30px;
  text-decoration: none;
  color: #35495e;
}

.button--grey:hover {
  box-shadow: 0 0 0.5rem 0 #1b518b;
  background-color: #1b518b;
  color: #fff;
}

.button--grey:focus {
  border-color: #1b518b;
  box-shadow: 0 0 0.5rem 0 #1b518b;
  color: #1b518b;
}
</style>
