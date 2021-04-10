<i18n lang="yaml">
en:
  Your email: "Your email address"
  Your message: "Your message"
  Send: "Send"
nl:
  Your email: "Je emailadres"
  Your message: "Je bericht"
  Send: "Verstuur"
</i18n>

<template>
  <form
    action="https://formspree.io/f/myylyopp"
    method="POST"
    class="contact-form"
  >
    <label>
      <div>
        {{ $t("Your email") }}:
      </div>
      <input type="email" name="_replyto">
    </label>

    <label>
      <div>
        {{ $t("Your message") }}:
      </div>
      <textarea name="message" rows="5" />
    </label>

    <Button type="submit">
      {{ $t("Send") }}
    </Button>
  </form>
</template>

<style lang="postcss" scoped>
.contact-form {
  @apply flex flex-col;

  label {
    @apply mb-2;

    div {
      @apply mb-1;
    }
  }

  input,
  textarea {
    @apply rounded-xl text-gray-950;
  }

  button {
    @apply mb-2;
  }
}
</style>
