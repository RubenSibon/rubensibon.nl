<i18n lang="yaml">
en:
  words: "words"
  minutesRead: "min. read"
nl:
  words: "woorden"
  minutesRead: "minuten leestijd | minuut leestijd | minuten leestijd"
</i18n>

<template>
  <div class="post-reading-time" :title="`${readingStats.minutes} ${$tc('minutesRead', readingStats.minutes)}, ${$t('words')}: ~${readingStats.words}`">
    {{ readingStats.minutes }} {{ $tc("minutesRead", readingStats.minutes) }}
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
  },
});
</script>

<style lang="postcss" scoped>
.post-reading-time {
  &:hover {
    @apply cursor-help;
  }
}
</style>
