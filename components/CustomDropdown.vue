<template>
  <b-nav-item-dropdown :toggle-class="styleClass" :text="title" right>
    <template #button-content>
      <slot name="special-content"></slot>
    </template>
    <div v-for="item in items" :key="item.name">
      <b-dropdown-item v-if="ifLink(item)" :to="localePath(item.link)">
        {{ item.name }}
      </b-dropdown-item>
      <b-dropdown-item
        v-else-if="ifLinkExt(item)"
        :href="item.link"
        target="_blank"
      >
        {{ item.name }}
      </b-dropdown-item>
    </div>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [
        {
          name: 'item 1',
          link: '#',
        },
        {
          name: 'item 2',
          link: '#',
        },
      ],
    },
    styleClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  updated() {},
  methods: {
    ifLink(item) {
      return typeof item.link === 'string' || item.link instanceof String
        ? item.link.charAt(0) === '/'
        : true
    },
    ifLinkExt(item) {
      return typeof item.link === 'string' || item.link instanceof String
        ? item.link.includes('http')
        : false
    },
  },
}
</script>
