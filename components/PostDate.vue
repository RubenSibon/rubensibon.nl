<i18n lang="yaml">
en:
  hours_ago: "hour ago | hours ago"
  days_ago: "day ago | days ago"
nl:
  hours_ago: "uur geleden | uren geleden"
  days_ago: "dag geleden | dagen geleden"
</i18n>

<template>
  <div
    :title="`${label ? `${label}: ` : ''}${formattedDate}`"
    class="post-date ie-gap-horizontal-xs"
  >
    <Icon v-if="showIcon" svg-icon="SvgIconCalendar" aria-hidden="true" />

    <span :class="`${ !showLabel ? 'sr-only' : '' }`">
      {{ label }}
    </span>

    <span>
      {{ formattedDate }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { DateTime, Interval } from "luxon";

export default defineComponent({
  props: {
    isoDate: {
      type: String,
      default: new Date().toISOString(),
    },
    label: {
      type: String,
      default: "",
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    formattedDate (): string {
      const dateTime = DateTime.fromISO(this.isoDate);
      const now = DateTime.now();

      const parseParams: {
        year?: "numeric";
        month?: "long";
        day?: "numeric";
      } = {};

      if (dateTime.day === now.day) {
        const hoursDuration = Math.ceil(Interval.fromDateTimes(dateTime, now).length("hours"));
        const hoursAgo = isNaN(hoursDuration) ? 1 : hoursDuration;

        return `${hoursAgo} ${this.$i18n.tc("hours_ago", hoursAgo)}`;
      } else {
        parseParams.day = "numeric";
      }

      if (dateTime.daysInYear < now.daysInYear && dateTime.daysInYear >= now.daysInYear - 7) {
        const daysDuration = Math.round(Interval.fromDateTimes(dateTime, now).length("days"));
        const daysAgo = isNaN(daysDuration) ? 1 : daysDuration;

        return `${daysAgo} ${this.$i18n.tc("days_ago", daysAgo)}`;
      } else {
        parseParams.month = "long";
      }

      if (dateTime.year !== now.year) {
        parseParams.year = "numeric";
      }

      return dateTime.setLocale(this.$i18n.locale).toLocaleString(parseParams);
    },
  },
});
</script>

<style lang="postcss" scoped>
.post-date {
  @apply flex items-center gap-1;
}
</style>
