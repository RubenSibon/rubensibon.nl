<template>
  <SlideScreen
    class="projects"
    :adjacent="{
      right: '/',
    }"
  >
    <header class="projects-header">
      <h1>{{ $t("Projects") }}</h1>
    </header>

    <div class="projects-list">
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
    </div>
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

  min-height: var(--vp-height);

  &-header {
    @apply flex items-center justify-start mb-5;
  }

  &-list {
    @apply grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5;
  }

  .👷‍♂️ {
    figcaption {
      @apply py-5 w-full text-left;
    }
  }
}
</style>
