<template>
  <b-container id="about" class="mb-3 text-center">
    <b-jumbotron
      :class="
        $colorMode.value === 'dark'
          ? 'bg-gray-800 text-light'
          : 'bg-gray-300 text-dark'
      "
    >
      <template #header>{{ $t('about.header') }}</template>

      <template #lead>
        {{ $t('about.lead') }}
      </template>

      <hr
        class="my-4"
        :class="$colorMode.value === 'dark' ? 'border-light' : 'border-dark'"
      />
      <p v-for="(parag, id) in $t('about.text')" :key="id" class="text-left">
        {{ parag }}
      </p>

      <div class="mt-4">
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
      </div>
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
