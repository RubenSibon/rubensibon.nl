<template>
  <div class="max-w-screen-sm px-4 mx-auto my-8">
    <div
      v-if="error.statusCode === 404"
      class="mb-8"
    >
      <h1 class="mb-4">
        Page not found
      </h1>

      <p class="mb-4">
        Status code: {{ error.statusCode }}
      </p>

      <p class="mb-4">
        Please go back with the browser or try another URL.
      </p>
    </div>

    <div
      v-else
      class="mb-8"
    >
      <h1>An error occured.</h1>

      <pre>{{ error }}</pre>
    </div>

    <nuxt-link to="/">
      Go to the home page.
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
});
</script>
