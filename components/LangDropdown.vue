<template>
  <b-nav-item-dropdown
    :toggle-class="styleClass"
    :text="title"
    right
    :menu-class="$colorMode.value === 'dark' ? 'bg-gray-800' : ''"
  >
    <template #button-content>
      <slot name="special-content"></slot>
    </template>
    <b-dropdown-item
      v-for="item in langs"
      :key="item.code"
      :to="switchLocalePath(item.code)"
      :link-class="
        $colorMode.value === 'dark' ? 'bg-gray-800 text-gray-200' : ''
      "
    >
      {{ item.name }}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    langs: {
      type: Array,
      default: () => [
        {
          name: 'ES',
          code: 'es',
        },
        {
          name: 'EN',
          code: 'en',
        },
      ],
    },
    styleClass: {
      type: String,
      default: '',
    },
  },
}
</script>
