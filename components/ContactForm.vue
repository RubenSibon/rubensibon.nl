<i18n lang="yaml">
en:
  Your email: "Your email address"
  Your message: "Your message"
  Send: "Send"
  Hi: "Hi"
  Im reaching out because: "I'm reaching out because"
  All the best: "All the best"
nl:
  Your email: "Je emailadres"
  Your message: "Je bericht"
  Send: "Verstuur"
  Hi: "Hoi"
  Im reaching out because: "Ik benader je omdat"
  All the best: "Groeten"
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
      <input type="email" name="_replyto" placeholder="email@example.com">
    </label>

    <label>
      <div>
        {{ $t("Your message") }}:
      </div>
      <textarea
        name="message"
        rows="5"
        minlength="10"
        maxlength="1000"
        :placeholder="`${$t('Hi')} Ruben,
${$t('Im reaching out because')} ...
${$t('All the best')},
Your name
`"
      />
    </label>

    <Button type="submit">
      {{ $t("Send") }}
    </Button>
  </form>
</template>

<style lang="postcss" scoped>
.contact-form {
  @apply flex flex-col w-full max-w-screen-sm;

  label {
    @apply mb-2 text-right;

    div {
      @apply mb-1;
    }
  }

  input,
  textarea {
    @apply rounded-xl w-full text-gray-950;
  }

  textarea {
    @apply resize-none mb-2;
  }

  button {
    @apply mb-2;
  }
}
</style>
