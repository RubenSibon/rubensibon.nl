<template>
  <div class="post-date">
    <span>
      <slot name="label" />
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
      default: null,
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

        return `${hoursAgo} ${this.$i18n.tc("post.hoursAgo", hoursAgo)}`;
      } else {
        parseParams.day = "numeric";
      }

      if (dateTime.daysInYear < now.daysInYear && dateTime.daysInYear >= now.daysInYear - 7) {
        const daysDuration = Math.round(Interval.fromDateTimes(dateTime, now).length("days"));
        const daysAgo = isNaN(daysDuration) ? 1 : daysDuration;

        return `${daysAgo} ${this.$i18n.tc("post.daysAgo", daysAgo)}`;
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
