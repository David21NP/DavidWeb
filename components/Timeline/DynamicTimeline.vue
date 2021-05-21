<template>
  <canvas id="canvas" style="display: block" class="w-100"></canvas>
</template>

<script>
import MyCanvas from '../../assets/js/MyCanvas.js'
export default {
  data() {
    return {
      m_canvas: null,
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.m_canvas = new MyCanvas()
    window.addEventListener('resize', this.m_canvas.reset)
    this.m_canvas.init()
  },
  methods: {},
}
</script>
