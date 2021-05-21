<template>
  <svg
    id="Layer_1"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 400 400"
    style="enable-background: new 0 0 400 400"
    xml:space="preserve"
  >
    <style type="text/css">
      .st3 {
        fill: none;
        stroke: #000;
        stroke-width: 2;
        stroke-miterlimit: 10;
      }
    </style>
    <path
      id="XMLID_10_"
      class="st3"
      d="M 200 60 L 200 100 C 200 180 80 140 80 240 Q 80 360 140 300"
    />
  </svg>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // eslint-disable-next-line no-undef
    // d3.selectAll('p').style('color', 'blue')

    // Get a reference to the <path>
    const path = document.querySelector('#XMLID_10_')

    const svgLims = document.querySelector('#Layer_1').getBoundingClientRect()

    // Get length of path... ~577px in this demo
    const pathLength = path.getTotalLength()

    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + ' ' + pathLength

    // Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength * 0.9

    const mapVal = this.map

    // When the page scrolls...
    window.addEventListener('scroll', function (e) {
      // What % down is it?
      const scrollPercentage = mapVal(
        document.documentElement.scrollTop + document.body.scrollTop,
        0,
        0.9,
        svgLims.x,
        svgLims.x + svgLims.height - document.documentElement.clientHeight
      )
      // Length to offset the dashes
      const drawLength = pathLength * (scrollPercentage + 0.1)

      // Draw in reverse
      path.style.strokeDashoffset = pathLength - drawLength
    })
  },
  methods: {
    map(val, y0, yn, x0, xn) {
      const m = (yn - y0) / (xn - x0)
      const b = y0 - m * x0
      return this.clamp(m * val + b, y0, yn)
    },
    clamp(val, min, max) {
      return val > max ? max : val < min ? min : val
    },
  },
}
</script>
