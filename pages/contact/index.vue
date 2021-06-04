<template>
  <div class="open-sans" style="padding-top: 8rem">
    <h1
      class="font-weight-bolder text-center display-4"
      :class="$colorMode.value === 'dark' ? 'text-light' : ''"
    >
      {{ $t('contact.title') }}
    </h1>
    <b-container class="py-5">
      <ContactForm :class="$colorMode.value === 'dark' ? 'text-light' : ''" />
    </b-container>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: 'Contact - DavidWeb',
    }
  },
}
</script>
