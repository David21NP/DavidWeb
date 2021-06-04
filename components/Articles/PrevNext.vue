<template>
  <div>
    <b-row>
      <b-col class="text-left">
        <b-link
          v-if="prev"
          :to="
            localePath({
              name: 'projects-cat-slug',
              params: { cat: prev.categories[0], slug: prev.slug },
            })
          "
          :class="
            $colorMode.value === 'dark' ? 'text-secondary' : 'text-primary'
          "
        >
          <b-icon-arrow-left />
          {{ prev.title }}
        </b-link>
        <span v-else>&nbsp;</span>
      </b-col>
      <b-col class="text-right">
        <b-link
          v-if="next"
          :to="
            localePath({
              name: 'projects-cat-slug',
              params: { cat: next.categories[0], slug: next.slug },
            })
          "
          :class="
            $colorMode.value === 'dark' ? 'text-secondary' : 'text-primary'
          "
        >
          {{ next.title }}
          <b-icon-arrow-right />
        </b-link>
        <span v-else>&nbsp;</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
