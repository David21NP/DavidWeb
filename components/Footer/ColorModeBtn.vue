<template>
  <div>
    <b-button
      class="d-none d-sm-inline"
      variant="secondary"
      pill
      @click="btnColorMode"
    >
      <div v-if="$colorMode.preference === 'dark'">
        <span class="align-middle material-icons md-24"> dark_mode </span>
        Dark
      </div>
      <div v-else-if="$colorMode.preference === 'light'">
        <span class="align-middle material-icons md-24"> light_mode </span>
        Light
      </div>
      <div v-else-if="$colorMode.preference === 'system'">
        <span class="align-middle material-icons md-24"> devices </span>
        System
      </div>
    </b-button>
    <b-button
      class="d-sm-none"
      variant="secondary"
      pill
      block
      @click="btnColorMode"
    >
      <div v-if="$colorMode.preference === 'dark'">
        <span class="align-middle material-icons md-24"> dark_mode </span>
        Dark
      </div>
      <div v-else-if="$colorMode.preference === 'light'">
        <span class="align-middle material-icons md-24"> light_mode </span>
        Light
      </div>
      <div v-else-if="$colorMode.preference === 'system'">
        <span class="align-middle material-icons md-24"> devices </span>
        System
      </div>
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    btnColorMode(ev) {
      if (this.$colorMode.preference === 'dark') {
        this.$colorMode.preference = 'system'
      } else if (this.$colorMode.preference === 'system') {
        this.$colorMode.preference = 'light'
      } else if (this.$colorMode.preference === 'light') {
        this.$colorMode.preference = 'dark'
      }
    },
  },
}
</script>
