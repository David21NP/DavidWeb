<template>
  <NuxtChild class="open-sans" :imgs="imgs" />
</template>

<script>
import { mapGetters } from 'Vuex'
export default {
  scrollToTop: true,
  computed: {
    ...mapGetters({
      imgs: 'carousel/getImgs',
    }),
  },
}
</script>
