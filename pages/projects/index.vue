<template>
  <SlideScreen
    class="projects"
    :adjacent="{
      right: '/',
    }"
  >
    <header>
      <h1>{{ $t("Projects") }}</h1>

      <Nav on-side="right">
        <nuxt-link :to="localePath('/')" class="link">
          <Icon svg-icon="SvgIconHome" :large="true" aria-hidden="true" />

          <Icon svg-icon="SvgIconChevronRight" :large="true" aria-hidden="true" />

          <span class="sr-only">Home&nbsp;➡</span>
        </nuxt-link>
      </Nav>
    </header>

    <main>
      <figure
        v-for="n of 12"
        :key="n"
        class="👷‍♂️"
      >
        <img src="https://placeimg.com/640/480/tech" alt="Stock photo">

        <figcaption>
          <h2 class="h3">
            Een project
          </h2>

          <p>Korte beschrijving van het project.</p>
        </figcaption>
      </figure>
    </main>
  </SlideScreen>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  nuxtI18n: {
    paths: {
      en: "/projects",
      nl: "/projecten",
    },
  },

  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: `${this.$t("Projects")} ${this.$t("by")} Ruben Sibon`,
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
    onPan (event: any) {
      const vpWidth = window.innerWidth;

      if (Math.abs(event.deltaX) > vpWidth * 0.75) {
        if (event.deltaX < 0) {
          this.$router.push(this.localePath("/"));
        }
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.projects {
  @apply mx-auto w-full max-w-screen-2xl p-5;

  min-height: var(--vp-height, 100vh);

  header {
    @apply flex items-center justify-between mb-8 sm:mb-16;
  }

  main {
    @apply grid sm:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-12;
  }

  .👷‍♂️ {
    @apply col-span-1 sm:col-span-3 lg:col-span-4;

    &:nth-child(4n+1) {
      @apply lg:col-start-3;
    }

    &:nth-child(4n+3) {
      @apply lg:col-start-4;
    }

    figcaption {
      @apply py-5 w-full text-left;
    }
  }
}
</style>
