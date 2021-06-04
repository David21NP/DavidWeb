<template>
  <b-col lg="3" class="d-none d-lg-block">
    <b-card
      title="More blogs"
      :bg-variant="$colorMode.value === 'dark' ? 'dark' : 'light'"
      :text-variant="$colorMode.value === 'dark' ? 'light' : 'dark'"
    >
      <b-list-group>
        <b-list-group-item
          v-for="(link, uid) of listRelated"
          :key="uid"
          :to="
            localePath({
              name: 'projects-cat-slug',
              params: { cat: link.categories[0], slug: link.slug },
            })
          "
          :class="`border-0 ${
            $colorMode.value === 'dark' ? 'bg-gray-800 text-gray-200' : ''
          }`"
        >
          {{ link.title }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    listRelated: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
