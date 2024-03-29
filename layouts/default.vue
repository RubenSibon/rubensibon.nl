<template>
  <div class="page">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import throttle from "lodash/throttle";

const tagList = [
  "software_dev",
  "programming",
  "cs",
  "linux",
  "foss",
  "open_source",
  "history",
  "javascript",
  "typescript",
  "vuejs",
  "nuxtjs",
  "react",
  "react_native",
  "python",
  "c",
];

export default defineComponent({
  // @ts-ignore
  head () {
    // @ts-ignore // fix: avoid Internet Explorer error
    if (process.client && window.MSInputMethodContext && document.documentMode) { return; }

    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: `Ruben Sibon: ${this.$t("_profession")}`,
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        ...i18nHead.meta,
        {
          hid: "description",
          name: "description",
          content: this.$t("_description"),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.translatedTagList,
        },
      ],
      link: [
        ...i18nHead.link,
      ],
    };
  },

  computed: {
    translatedTagList () {
      return tagList.map((t) => {
        return this.$t(`tagList.${t}`);
      });
    },
  },

  beforeMount () {
    function setVpHeightCSS () {
      document.body.style.setProperty("--vp-height", `${window.innerHeight}px`);
    }

    window.addEventListener("resize", throttle(setVpHeightCSS, 500));

    setVpHeightCSS();
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

  --color-back: theme("colors.gray.50");
  --color-front: theme("colors.gray.950");

  @screen dark {
    --color-back: theme("colors.gray.950");
    --color-front: theme("colors.gray.50");
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
  @apply relative my-12 ml-4 sm:ml-8 md:ml-0
    font-serif text-2xl sm:text-3xl italic tracking-wide;

  @screen md {
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

/* Fixes for Internet Explorer 11 */
.ie-gap-vertical {
  & > * {
    margin-bottom: 0.75rem;
  }

  &-sm > * {
    margin-bottom: 0.25rem;
  }

  &-xs > * {
    margin-bottom: 0.125rem;
  }

  & > *,
  &-sm > *,
  &-xs > * {
    @supports (gap: 1rem) {
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.ie-gap-horizontal {
  & > * {
    margin-right: 0.75rem;
  }

  &-sm > * {
    margin-right: 0.25rem;
  }

  &-xs > * {
    margin-right: 0.125rem;
  }

  & > *,
  &-sm > *,
  &-xs > * {
    @supports (gap: 1rem) {
      margin-right: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>

<style lang="postcss" scoped>
.page {
  @apply w-full max-w-screen h-full mx-auto overflow-x-hidden;

  min-height: var(--vp-height, 100vh);
}
</style>
