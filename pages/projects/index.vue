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

    <main class="mb-16">
      <a
        v-for="project of projects"
        :key="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="👷‍♂️"
      >
        <figure>
          <div>
            <img :src="project.img.src" :alt="project.title">
          </div>

          <figcaption>
            <h2 class="h3">
              {{ project.title }}
            </h2>

            <p>
              {{ project.description }}
            </p>

            <p>
              Gemaakt voor <a
                :href="project.client.url"
                target="_blank"
                rel="noopener noreferrer"
              >{{ project.client.name }}</a> in {{ project.client.year }}
            </p>

            <div class="flex gap-2 mt-3">
              <TagLabel v-for="tag in project.tags" :key="tag">{{ $t(`tagList.${tag}`) }}</TagLabel>
            </div>
          </figcaption>
        </figure>
      </a>
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

  data () {
    return {
      projects: [
        {
          title: "RubenSibon.nl",
          description: "This website :-)",
          client: {
            name: "Ruben",
            url: "https://www.rubensibon.nl/",
            year: 2021,
          },
          img: {
            src: "https://www.rubensibon.nl/img/sitebanner.jpg",
          },
          url: "https://www.rubensibon.nl/",
          tags: ["vuejs", "nuxtjs"],
        },
        {
          title: "Weertje hè?",
          description: "Hoe het weer in jouw leven veranderde.",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2020,
          },
          img: {
            src: "https://app.nos.nl/op3/weer/img/share.jpg",
          },
          url: "https://app.nos.nl/op3/weer/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "Wie is wie rond Taghi?",
          description: "Connecties binnen het criminele circuit in kaart.",
          client: {
            name: "NOS",
            url: "https://www.nos.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/onderwereld/img/share.jpg",
          },
          url: "https://app.nos.nl/onderwereld/",
          tags: ["vuejs", "nuxtjs", "nos"],
        },
        {
          title: "Dit is jouw energiecocktail",
          description: "Wat is de energiemix van jouw regio en gaan ze de klimaatdoelstellingen halen?",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/energietransitie/img/share.jpg",
          },
          url: "https://app.nos.nl/op3/energietransitie/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "Kijkje achter je scherm 📱♻",
          description: "Wat zit er allemaal in jouw telefoon? 📱💎",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/kijkjeachterjescherm/img/share.jpg",
          },
          url: "https://app.nos.nl/op3/kijkjeachterjescherm/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "🍨 Algoritmes | NOS op 3",
          description: "Algoritmes zijn overal. Hoe werken ze? Legt @nosop3 je uit op deze pagina 🍨.",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/algoritmes/img/link.jpg",
          },
          url: "https://app.nos.nl/op3/algoritmes/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "Adembenemend: Grevelingenmeer & Oosterschelde 🌊🐟",
          description: "Duik onder 🌊 in de dead zone 💀 van Nederland 🐟.",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/adembenemend/img/share.jpg",
          },
          url: "https://app.nos.nl/op3/adembenemend/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "De Brexit uitgelegd",
          description: "easy/medium/hard/expert",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/brexit/img/share.jpg",
          },
          url: "https://app.nos.nl/op3/brexit/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "Monstercookies 🍪: de advertentiehandel achter jouw klik",
          description: "Welke wereld treedt in werking als je akkoord gaat met cookies? We leggen het je uit.",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/cookies/img/share.jpg",
          },
          url: "https://app.nos.nl/op3/cookies/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "Weekendje weg",
          description: "Je wil een weekendje weg, maar wat heb je er voor over?",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/weekendje-weg/img/link.jpg",
          },
          url: "https://app.nos.nl/op3/weekendje-weg/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "🏎  Formule 1  🏁",
          description: "Gaat Zandvoort 🏖 de Formule 1 🏁 weer spannend 🏎 maken?",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/formule1/img/link.jpg",
          },
          url: "https://app.nos.nl/op3/formule1/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "Geldig",
          description: "In dit €20-biljet zitten twaalf echtheidskenmerken verstopt. Kun jij ze allemaal vinden?",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/geldig/img/link.jpg",
          },
          url: "https://app.nos.nl/op3/geldig/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "Schuldig",
          description: "Bekijk hier hoe makkelijk je in de schulden raakt, en hoe moeilijk je er weer uit komt.",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/schuldbewust/img/share.jpg",
          },
          url: "https://app.nos.nl/op3/schuldbewust/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
        {
          title: "Echte Liefde",
          description: "Hoe beoordeel je liefde? Daar zijn ambtenaren dagelijks mee bezig. In dit interactieve verhaal van @nosop3 bepaal jij zelf of iets liefde is of niet.",
          client: {
            name: "NOS op 3",
            url: "https://www.nosop3.nl/",
            year: 2019,
          },
          img: {
            src: "https://app.nos.nl/op3/echteliefde/img/link.jpg",
          },
          url: "https://app.nos.nl/op3/echteliefde/",
          tags: ["vuejs", "nuxtjs", "nosop3"],
        },
      ],
    };
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
    @apply grid md:grid-cols-2 gap-6 lg:gap-12;
  }

  .👷‍♂️ {
    @apply transition-transform duration-250 ease-out
      rounded-xl border-4 border-current p-2 bg-gray-100 dark:bg-gray-900 no-underline;

    &:hover,
    &:focus {
      @apply border-solid border-purple-700 text-gray-950 dark:text-gray-50 no-underline;

      transform: scale(1.05);
    }

    figure {
      & > div {
        @apply flex items-center justify-center aspect-w-16 aspect-h-9;

        img {
          @apply w-full h-auto;
        }
      }

      figcaption {
        @apply p-5 w-full text-left cursor-pointer;
      }
    }
  }
}
</style>
