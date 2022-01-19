<i18n lang="yaml">
en:
  Your email: "Your email address"
  Your message: "Your message"
  Send: "Send"
  Hi: "Hi"
  Im reaching out because: "I'm reaching out because"
  All the best: "All the best"
  Your name: "Your name"
nl:
  Your email: "Je emailadres"
  Your message: "Je bericht"
  Send: "Verstuur"
  Hi: "Hoi"
  Im reaching out because: "Ik benader je omdat"
  All the best: "Groeten"
  Your name: "Je naam"
</i18n>

<template>
  <form
    action="https://formspree.io/f/myylyopp"
    method="POST"
    class="flex flex-col w-full max-w-screen-sm"
  >
    <label class="mb-2 text-left">
      <div class="pl-2 mb-1">
        {{ $t("Your email") }}:
      </div>
      <input
        type="email"
        name="_replyto"
        placeholder="email@example.com"
        class="w-full mb-2 resize-none rounded-xl text-gray-950"
      >
    </label>

    <label class="mb-2 text-left">
      <div class="pl-2 mb-1">
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
${$t('Your name')}
`"
        class="w-full rounded-xl text-gray-950"
      />
    </label>

    <Button type="submit" class="mb-2">
      {{ $t("Send") }}
    </Button>
  </form>
</template>
