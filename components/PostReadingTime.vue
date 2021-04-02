<i18n lang="yaml">
en:
  words: "words"
  minutes: "min. read"
nl:
  words: "woorden"
  minutes: "minuten | minuut | minuten"
</i18n>

<template>
  <div class="post-reading-time" :title="`${readingStats.minutes} ${$tc('minutes', readingStats.minutes)}, ${$t('words')}: ~${words}`">
    <SvgClock /> {{ readingStats.minutes }} {{ $tc("minutes", readingStats.minutes) }}
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
    SvgClock: () => import("~/assets/icons/clock.svg?inline"),
  },

  props: {
    text: {
      type: String,
      default: "",
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
    @apply w-4 h-4;

    fill: currentColor;
  }

  &:hover {
    @apply cursor-help;
  }
}
</style>
