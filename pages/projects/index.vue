<template>
  <main
    ref="main"
    v-pan="onPan"
    class="projects"
  >
    <header class="projects-header">
      <h1>{{ $t("Projects") }}</h1>
    </header>

    <div class="projects-grid">
      <figure v-for="n of 24" :key="n">
        <img src="https://placeimg.com/640/480/tech" alt="Stock photo">
        <caption>
          <h2 class="h3">
            Project Secret
          </h2>
          <p>Korte beschrijving van het project.</p>
        </caption>
      </figure>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup () {},

  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      title: `${this.$t("projects")} ${this.$t("by")} Ruben Sibon`,
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
  @apply mx-auto max-w-screen-2xl;

  &-header {
    @apply flex items-center justify-start p-5;
  }

  &-grid {
    @apply grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5;
  }

  caption {
    @apply py-5 w-full text-left;
  }
}
</style>
