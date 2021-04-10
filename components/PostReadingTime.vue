<i18n lang="yaml">
en:
  words: "words"
  minutes: "min. read"
  about: "About"
  reading_time: " "
nl:
  words: "woorden"
  minutes: "minuten | minuut | minuten"
  about: "Circa"
  reading_time: "leestijd"
</i18n>

<template>
  <div
    class="post-reading-time ie-gap-horizontal-xs"
    :title="`${$t('about')} ${readingStats.minutes} ${$tc('minutes', readingStats.minutes)} ${$t('reading_time')} (~${words} ${$t('words')})`"
  >
    <SvgIconClock v-if="showIcon" aria-hidden="true" />
    {{ readingStats.minutes }} {{ $tc("minutes", readingStats.minutes) }}
    <span :class="`${ !showLabel ? 'sr-only' : '' }`">{{ $t('reading_time') }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import readingTime from "reading-time";

interface ReadingStats {
  text: string;
  minutes: number;
  time: number;
  words: number;
};

export default defineComponent({
  components: {
    SvgIconClock: () => import("~/assets/icons/clock.svg?inline"),
  },

  props: {
    text: {
      type: String,
      default: "",
    },
    showLabel: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    readingStats (): ReadingStats {
      const stats = readingTime(this.text);

      stats.minutes = Math.round(stats.minutes);

      return stats;
    },

    words (): number {
      if (!this.readingStats || !this.readingStats.words) {
        return 0;
      }

      if (this.readingStats.words > 9) {
        return Math.round(this.readingStats.words / 10) * 10;
      } else {
        return this.readingStats.words;
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.post-reading-time {
  @apply flex items-center gap-1;

  svg {
    @apply w-4 h-4 fill-current;
  }

  &:hover {
    @apply cursor-help;
  }
}
</style>
