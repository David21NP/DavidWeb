<template>
  <div :class="position">
    <b-button> prueba </b-button>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'bottom-right',
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom-right {
  position: fixed;
  bottom: 40px;
  right: 40px;
}

.bottom-left {
  position: fixed;
  bottom: 40px;
  left: 40px;
}

.top-right {
  position: fixed;
  top: 40px;
  right: 40px;
}

.top-left {
  position: fixed;
  top: 40px;
  left: 40px;
}
</style>
