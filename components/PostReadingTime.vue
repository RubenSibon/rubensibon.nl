<template>
  <div class="post-reading-time" :title="`${readingStats.minutes} ${$tc('post.minutesRead', readingStats.minutes)}, ${$t('post.words')}: ~${readingStats.words}`">
    {{ readingStats.minutes }} {{ $tc("post.minutesRead", readingStats.minutes) }}
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
