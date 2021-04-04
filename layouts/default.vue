<template>
  <div class="page">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: `Ruben Sibon: ${this.$t("profession")}`,
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
  @apply transition-colors duration-250 ease-out
    bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-100;

  --bg-color: theme("colors.gray.50");

  @screen dark {
    --bg-color: theme("colors.gray.950");
  }
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
  @apply transition-colors duration-250 ease-in;
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
  @apply relative border-b-2 border-purple-500
    transition duration-250 ease-in
    hover:border-dotted hover:text-purple-500
    focus:outline-none
    focus-visible:rounded focus-visible:border-transparent focus-visible:border-dotted focus-visible:text-purple-500
    no-underline;

  &:focus-visible {
    outline: 2px dotted currentColor;
  }
}

a:link,
a:visited,
button {
  &.github,
  &.stack-overflow,
  &.linkedin,
  &.twitter {
    @apply border-current
      hover:border-current hover:text-white
      focus-visible:border-current focus-visible:text-white
    ;
  }

  &.github {
    @apply text-[#171515] dark:text-white
      hover:border-white hover:text-white hover:bg-[#171515] dark:hover:bg-white
      focus-visible:border-white focus-visible:text-white focus-visible:bg-[#171515] dark:focus-visible:bg-white
    ;
  }

  &.stack-overflow {
    @apply text-[#f58025]
      hover:bg-[#f58025]
      focus-visible:bg-[#f58025]
    ;
  }

  &.linkedin {
    @apply text-[#0077b5]
      hover:bg-[#0077b5]
      focus-visible:bg-[#0077b5]
    ;
  }

  &.twitter {
    @apply text-[#55acee]
      hover:bg-[#55acee]
      focus-visible:bg-[#55acee]
    ;
  }
}
</style>

<style lang="postcss" scoped>
.page {
  @apply h-screen min-h-screen mx-auto;
}
</style>
