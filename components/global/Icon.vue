<template>
  <component
    :is="svgIcon"
    :class="['icon', { large: large }]"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

type IconNames = "SvgIconHome" |
"SvgIconTag" |
"SvgIconCalendar" |
"SvgIconClock" |
"SvgIconChevronUp" |
"SvgIconChevronRight" |
"SvgIconChevronDown" |
"SvgIconChevronLeft" |
"SvgIconGitHub" |
"SvgIconGitLab" |
"SvgIconCodePen" |
"SvgIconSO" |
"SvgIconLinkedIn" |
"SvgIconTwitter";

export default defineComponent({
  components: {
    SvgIconHome: () => import("~/assets/icons/home.svg?inline"),
    SvgIconTag: () => import("~/assets/icons/tag.svg?inline"),
    SvgIconCalendar: () => import("~/assets/icons/calendar.svg?inline"),
    SvgIconClock: () => import("~/assets/icons/clock.svg?inline"),
    SvgIconChevronUp: () => import("~/assets/icons/chevron-up.svg?inline"),
    SvgIconChevronRight: () => import("~/assets/icons/chevron-right.svg?inline"),
    SvgIconChevronDown: () => import("~/assets/icons/chevron-down.svg?inline"),
    SvgIconChevronLeft: () => import("~/assets/icons/chevron-left.svg?inline"),
    SvgIconGitHub: () => import("~/assets/icons/github.svg?inline"),
    SvgIconGitLab: () => import("~/assets/icons/gitlab.svg?inline"),
    SvgIconCodePen: () => import("~/assets/icons/codepen.svg?inline"),
    SvgIconSO: () => import("~/assets/icons/stackoverflow.svg?inline"),
    SvgIconLinkedIn: () => import("~/assets/icons/linkedin.svg?inline"),
    SvgIconTwitter: () => import("~/assets/icons/twitter.svg?inline"),
  },

  props: {
    svgIcon: {
      type: String as PropType<IconNames>,
      default: "",
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="postcss" scoped>
.icon {
  @apply w-4 h-4 fill-current;

  &.large {
    @apply w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12;
  }
}
</style>
