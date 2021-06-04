<template>
  <b-nav-item-dropdown :toggle-class="styleClass" :text="title" right>
    <template #button-content>
      <slot name="special-content"></slot>
    </template>
    <div v-for="item in langs" :key="item.code">
      <b-dropdown-item :to="switchLocalePath(item.code)">
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
