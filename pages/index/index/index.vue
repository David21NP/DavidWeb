<template>
  <b-container id="about" class="mb-3 text-center">
    <b-jumbotron
      :class="$colorMode.value === 'dark' ? 'bg-gray-800 text-light' : ''"
    >
      <template #header>{{ $t('about.header') }}</template>

      <template #lead>
        {{ $t('about.lead') }}
      </template>

      <hr class="my-4" />

      <p style="white-space: pre-line">
        {{ $t('about.text') }}
      </p>

      <b-button
        class="mb-3 mb-sm-0"
        :to="localePath({ path: '/life' })"
        :variant="$colorMode.value === 'dark' ? 'secondary' : 'primary'"
      >
        {{ $t('about.links.life') }}
      </b-button>
      <b-button
        class="mb-3 mb-sm-0"
        :to="localePath({ path: '/projects' })"
        :variant="$colorMode.value === 'dark' ? 'secondary' : 'primary'"
      >
        {{ $t('about.links.projects') }}
      </b-button>
      <b-button
        class="mb-3 mb-sm-0"
        :to="localePath({ path: '/contact' })"
        :variant="$colorMode.value === 'dark' ? 'secondary' : 'primary'"
      >
        {{ $t('about.links.contact') }}
      </b-button>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#about {
  padding-top: 9rem !important;
  padding-bottom: 3rem !important;
}
</style>
