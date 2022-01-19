<i18n lang="yaml">
nl:
  Software Developer: "Softwareontwikkelaar"
  Follow me: "Volg mij"
  Get in touch: "Start een gesprek"
  if it pleases you: "als het je pleziert"
  but really, only if you want to: "maar echt, alleen als je dat wilt"
  Contact: "Contact"
  Small print: "De kleine letters"
  About this website: "Over deze website"
en:
  Software Developer: "Software Developer"
  Follow me: "Follow me"
  Get in touch: "Get in touch"
  if it pleases you: "if it pleases you"
  but really, only if you want to: "but really, only if you want to"
  Contact: "Contact"
  Small print: "Small print"
  About this website: "About this website"
</i18n>

<template>
  <div class="🏡">
    <SlideScreen
      :adjacent="{
      }"
    >
      <!-- left: '/projects', -->
      <!-- right: '/articles', -->
      <section id="about-me">
        <div class="me">
          <picture class="picture">
            <source srcset="~/assets/img/homepage/ruben_sibon.jpg" type="image/webp">

            <img src="~/assets/img/homepage/ruben_sibon.jpg" alt="A photo of this website's author.">
          </picture>

          <h1 class="title">
            Ruben Sibon
          </h1>

          <h2 class="subtitle">
            {{ $t("Software Developer") }}
          </h2>

          <p
            v-if="locale === 'nl'"
            class="description"
          >
            👋 Hoi! Ik ben <span style="font-weight: bold;">Ruben</span>, een web- and appontwikkelaar uit <span style="font-weight: bold;">Amsterdam</span>.
            Ik programmeer vooral met <span style="color: #f7df1e; font-weight: bold;">JavaScript</span> &amp; <span style="color: #007acc; font-weight: bold;">TypeScript</span> in de frameworks <span style="color: #41b883; font-weight: bold;">Vue.js</span> en <span style="color: #61dbfb; font-weight: bold;">React</span>.
          </p>
          <p
            v-else
            class="description"
          >
            👋 Hi! I'm <span style="font-weight: bold;">Ruben</span>, a web and app developer from <span style="font-weight: bold;">Amsterdam</span>, The Netherlands.
            I mostly work with <span style="color: #f7df1e; font-weight: bold;">JavaScript</span> &amp; <span style="color: #007acc; font-weight: bold;">TypeScript</span> in the <span style="color: #41b883; font-weight: bold;">Vue.js</span> and <span style="color: #61dbfb; font-weight: bold;">React</span> frameworks.
          </p>
        </div>

        <Nav orientation="vertical">
          <a
            tabindex="0"
            :title="$t('More')"
            class="link"
            @click="nextScreenHandler($event, '#follow-me')"
            @keyup.enter="nextScreenHandler($event, '#follow-me')"
          >
            {{ $t("More") }}

            <Icon svg-icon="SvgIconChevronDown" :large="true" aria-hidden="true" />

            <span class="sr-only">⬇</span>
          </a>
        </Nav>
      </section>
    </SlideScreen>

    <section id="follow-me">
      <div>
        <h2>
          {{ $t('Follow me') }}
        </h2>

        <p class="mb-4">
          ({{ $t("if it pleases you") }})
        </p>

        <div class="buttons-social ie-gap-vertical">
          <Button
            tag="a"
            href="https://github.com/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="github"
          >
            <template #before>
              <span>
                <Icon svg-icon="SvgIconGitHub" aria-hidden="true" />
              </span>
            </template>

            <span>
              GitHub
            </span>
          </Button>

          <Button
            tag="a"
            href="https://gitlab.com/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="gitlab"
          >
            <template #before>
              <span>
                <Icon svg-icon="SvgIconGitLab" aria-hidden="true" />
              </span>
            </template>

            <span>
              GitLab
            </span>
          </Button>

          <Button
            tag="a"
            href="https://codepen.io/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="codepen"
          >
            <template #before>
              <span>
                <Icon svg-icon="SvgIconCodePen" aria-hidden="true" />
              </span>
            </template>

            <span>
              CodePen
            </span>
          </Button>

          <Button
            tag="a"
            href="https://stackoverflow.com/story/rubensibon"
            target="_blank"
            rel="noopener noreferrer"
            class="stack-overflow"
          >
            <template #before>
              <span>
                <Icon svg-icon="SvgIconSO" aria-hidden="true" />
              </span>
            </template>

            <span>
              StackOverflow
            </span>
          </Button>

          <Button
            tag="a"
            href="https://www.linkedin.com/in/rubensibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="linkedin"
          >
            <template #before>
              <span>
                <Icon svg-icon="SvgIconLinkedIn" aria-hidden="true" />
              </span>
            </template>

            <span>
              LinkedIn
            </span>
          </Button>

          <Button
            tag="a"
            href="https://twitter.com/RubenSibon"
            target="_blank"
            rel="noopener noreferrer"
            variant="twitter"
          >
            <template #before>
              <span>
                <Icon svg-icon="SvgIconTwitter" aria-hidden="true" />
              </span>
            </template>

            <span>
              Twitter
            </span>
          </Button>
        </div>
      </div>

      <Nav orientation="vertical">
        <a
          tabindex="0"
          :title="$t('Contact')"
          class="link"
          @click="nextScreenHandler($event, '#contact')"
          @keyup.enter="nextScreenHandler($event, '#contact')"
        >
          {{ $t("Contact") }}

          <Icon svg-icon="SvgIconChevronDown" :large="true" aria-hidden="true" />

          <span class="sr-only">⬇</span>
        </a>
      </Nav>
    </section>

    <section id="contact">
      <div>
        <h2>
          {{ $t('Get in touch') }}
        </h2>

        <p class="mb-4">
          ({{ $t("but really, only if you want to") }})
        </p>

        <contact-form />
      </div>

      <Nav orientation="vertical">
        <a
          tabindex="0"
          :title="$t('Contact')"
          class="link"
          @click="nextScreenHandler($event, '#about-this-site')"
          @keyup.enter="nextScreenHandler($event, '#about-this-site')"
        >
          {{ $t('Small print') }}

          <Icon svg-icon="SvgIconChevronDown" :large="true" aria-hidden="true" />

          <span class="sr-only">⬇</span>
        </a>
      </Nav>
    </section>

    <section id="about-this-site">
      <div class="max-w-screen-md">
        <h2 class="mb-4">
          {{ $t('About this website') }}
        </h2>

        <div v-if="locale === 'nl'" class="mb-6">
          <p class="mb-2">
            Deze website wordt gehost door GitHub. <a href="https://github.com/RubenSibon/rubensibon.nl" target="_blank" rel="noopener noreferrer">Bekijk de code</a>.
          </p>

          <h3 class="mt-4 mb-2 h4">
            Privacy
          </h3>

          <p class="mb-2">
            Geen persoonlijke informatie wordt verzameld anders dan wat is ingezonden met een webformulier.
          </p>

          <p class="mb-2">
            Om je webbrowser's taal te onthouden wordt er een niet-volgende cookie geplaatst.
          </p>

          <h3 class="mt-4 mb-2 h4">
            Auteursrecht
          </h3>

          <p class="mb-2">
            Alle code en inhoud die niet van derde partijen komt valt onder het auteursrecht van Ruben Sibon
          </p>

          <p>
            © Ruben Sibon {{ copyrightYears }}.
          </p>
        </div>

        <div v-else class="mb-6">
          <p class="mb-2">
            This website is hosted by GitHub. <a href="https://github.com/RubenSibon/rubensibon.nl" target="_blank" rel="noopener noreferrer">Inspect the code</a>.
          </p>

          <h3 class="mt-4 mb-2 h4">
            Privacy
          </h3>

          <p class="mb-2">
            No personally identifiable information is collected other than what is provided via a web form.
          </p>

          <p class="mb-2">
            To remember your browser's language a non-tracking cookie is set.
          </p>

          <h3 class="mt-4 mb-2 h4">
            Copyrights
          </h3>

          <p class="mb-2">
            All code and content not provided by third-parties is subject to the copyrights of Ruben Sibon.
          </p>

          <p>
            © Ruben Sibon {{ copyrightYears }}.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import VueScrollTo from "vue-scrollto";

const options = {
  container: "body",
  easing: "ease-in",
  offset: 0,
  force: true,
  cancelable: true,
};

export default defineComponent({
  asyncData ({ i18n }) {
    const locale = i18n.locale;

    return {
      locale,
    };
  },

  computed: {
    copyrightYears () {
      const yearStart = 2021;
      const yearCurrent = new Date().getFullYear();

      return `${yearStart !== yearCurrent ? `${yearStart} - ` : ""}${yearCurrent}`;
    },
  },

  methods: {
    nextScreenHandler (event: Event, toScreen: string) {
      event.preventDefault();

      if (this.$router.currentRoute.fullPath !== `${this.localePath("/")}${toScreen}`) {
        this.$router.replace(`${this.localePath("/")}${toScreen}`);
      }

      VueScrollTo.scrollTo(toScreen, 500, options);
    },
  },
});
</script>

<style lang="postcss">
/* Fix for Internet Explorer 11 */
html[is-ie] {
  section {
    @apply h-screen;
  }
}
</style>

<style lang="postcss" scoped>
.🏡 {
  @apply flex flex-col items-center mx-auto px-4 md:px-8 text-center;

  section {
    @apply flex flex-col items-center justify-evenly max-w-screen-2xl w-screen min-h-screen;

    min-height: var(--vp-height, 100vh);

    & > div {
      @apply flex flex-1 flex-col items-center justify-center px-4 md:px-8 w-full h-full;
    }
  }

  .me {
    .picture {
      @apply border-4 border-gray-950 dark:border-gray-50 rounded-full mb-4 sm:mb-6 w-36 h-36 overflow-hidden;
    }

    .title {
      @apply mb-2;
    }

    .subtitle {
      @apply mb-4 sm:mb-6 text-2xl font-semibold;
    }

    .description {
      @apply max-w-screen-sm md:max-w-screen-md;
    }
  }

  .buttons-social {
    @apply grid grid-cols-1 sm:grid-cols-4 md:grid-cols-12 gap-3
      mx-auto px-4 w-full sm:w-auto max-w-screen-md h-max;

    a {
      @apply sm:col-span-2 md:col-span-6;

      &:last-child:not(:nth-child(even)) {
        @apply sm:col-start-2 sm:col-end-4 md:col-start-4 md:col-end-10;
      }
    }
  }
}
</style>
