<i18n lang="yaml">
nl:
  Connect with me: "Verbind met mij"
  Get in touch: "Start een gesprek"
  if it pleases you: "als het je pleziert"
  but really, only if you want to: "maar echt, alleen als je dat wilt"
  Contact: "Contact"
  Small print: "De kleine letters"
  About this site: "Over deze website"
en:
  Connect with me: "Connect with me"
  Get in touch: "Get in touch"
  if it pleases you: "if it pleases you"
  but really, only if you want to: "but really, only if you want to"
  Contact: "Contact"
  Small print: "Small print"
  About this site: "About this website"
</i18n>

<template>
  <div class="🏡 flex flex-col items-center px-4 mx-auto text-center md:px-8">
    <SlideScreen
      :adjacent="{
      }"
    >
      <!-- left: '/projects', -->
      <!-- right: '/articles', -->
      <SectionFullScreen id="about-me">
        <figure class="mb-4 overflow-hidden border-4 rounded-full border-gray-950 dark:border-gray-50 sm:mb-6 w-36 h-36">
          <picture>
            <source srcset="~/assets/img/homepage/ruben_sibon.jpg" type="image/webp">

            <img src="~/assets/img/homepage/ruben_sibon.jpg" alt="A photo of this website's author.">
          </picture>

          <figcaption class="sr-only">
            A photo of this website's author.
          </figcaption>
        </figure>

        <div class="max-w-screen-sm md:max-w-screen-md">
          <nuxt-content :document="aboutMe" />
        </div>

        <template #after>
          <Nav>
            <NavLink
              :target="'#connect'"
              :tabindex="0"
              :title="$t('More')"
              :linkHandler="nextScreenHandler"
            >
              {{ $t("More") }}

              <Icon svg-icon="SvgIconChevronDown" :large="true" aria-hidden="true" />

              <span class="sr-only">⬇</span>
            </NavLink>
          </Nav>
        </template>
      </SectionFullScreen>
    </SlideScreen>

    <SectionFullScreen id="connect">
      <div>
        <h2>
          {{ $t('Connect with me') }}
        </h2>

        <p class="mb-4">
          ({{ $t("if it pleases you") }})
        </p>

        <div class="grid w-full max-w-screen-md grid-cols-1 gap-3 px-4 mx-auto sm:grid-cols-4 md:grid-cols-12 sm:w-auto h-max ie-gap-vertical">
          <Button
            v-for="social in socials"
            :key="social.id"
            tag="a"
            :href="social.dest"
            target="_blank"
            rel="noopener noreferrer"
            :variant="social.id"
            :classes="'sm:col-span-2 md:col-span-6 last:odd:sm:col-start-2 sm:last:odd:col-end-4 md:last:odd:col-start-4 md:last:odd:col-end-10'"
          >
            <template #before>
              <span>
                <Icon
                  :svg-icon="social.iconId"
                  aria-hidden="true"
                />
              </span>
            </template>

            <span>{{ social.label }}</span>
          </Button>
        </div>
      </div>

      <template #after>
        <Nav>
          <NavLink
            :target="'#contact'"
            :tabindex="0"
            :title="$t('Contact')"
            :linkHandler="nextScreenHandler"
          >
            {{ $t("Contact") }}

            <Icon svg-icon="SvgIconChevronDown" :large="true" aria-hidden="true" />

            <span class="sr-only">⬇</span>
          </NavLink>
        </Nav>
      </template>
    </SectionFullScreen>

    <SectionFullScreen id="contact">
      <h2>
        {{ $t('Get in touch') }}
      </h2>

      <p class="mb-4">
        ({{ $t("but really, only if you want to") }})
      </p>

      <ContactForm />

      <template #after>
        <Nav>
          <NavLink
            :target="'#about-this-site'"
            :tabindex="0"
            :title="$t('About this site')"
            :linkHandler="nextScreenHandler"
          >
            {{ $t('Small print') }}

            <Icon svg-icon="SvgIconChevronDown" :large="true" aria-hidden="true" />

            <span class="sr-only">⬇</span>
          </NavLink>
        </Nav>
      </template>
    </SectionFullScreen>

    <SectionFullScreen id="about-this-site">
      <div class="max-w-screen-md">
        <nuxt-content :document="aboutThisSite" />

        <p>
          © Ruben Sibon {{ copyrightYears }}.
        </p>
      </div>
    </SectionFullScreen>
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
  async asyncData ({ $content, i18n }) {
    const locale = i18n.locale;
    const aboutMe = await $content(`${locale}/about-me`).fetch();
    const aboutThisSite = await $content(`${locale}/about-this-site`).fetch();

    return {
      locale,
      aboutMe,
      aboutThisSite,
    };
  },

  data () {
    return {
      socials: [
        {
          id: "github",
          dest: "https://github.com/RubenSibon",
          iconId: "SvgIconGitHub",
          label: "GitHub",
        },
        {
          id: "gitlab",
          dest: "https://gitlab.com/RubenSibon",
          iconId: "SvgIconGitLab",
          label: "GitLab",
        },
        {
          id: "codepen",
          dest: "https://codepen.io/RubenSibon",
          iconId: "SvgIconCodePen",
          label: "CodePen",
        },
        {
          id: "dev-to",
          dest: "https://dev.to/rubensibon",
          iconId: "SvgIconDevTo",
          label: "Dev.to",
        },
        {
          id: "stack-overflow",
          dest: "https://stackoverflow.com/story/rubensibon",
          iconId: "SvgIconSO",
          label: "StackOverflow",
        },
        {
          id: "linkedin",
          dest: "https://www.linkedin.com/in/rubensibon",
          iconId: "SvgIconLinkedIn",
          label: "LinkedIn",
        },
        {
          id: "twitter",
          dest: "https://twitter.com/RubenSibon",
          iconId: "SvgIconTwitter",
          label: "Twitter",
        },
      ],
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
