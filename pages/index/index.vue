<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      class="mt-0"
      :interval="0"
      fade
      controls
      indicators
      :background="
        $colorMode.value == 'light' ? 'var(--gray-200)' : 'var(--gray-800)'
      "
      :style="`--color-cap: ${
        $colorMode.value == 'light' ? 'var(--dark)' : 'var(--light)'
      }`"
      :img-width="winWidth"
      :img-height="winHeight"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="img in imgs"
        :key="$t(img.alt)"
        :caption="$t(img.caption)"
        :text="$t(img.text)"
        :img-blank="img.src === ''"
      >
        <template v-if="img.src !== ''" #img>
          <b-img
            class="img-cover"
            :width="winWidth"
            :height="winHeight"
            :src="img.src"
            :alt="$t(img.alt)"
          >
          </b-img>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: () => [
        {
          alt: 'img 1',
          src: '',
          caption: '',
          text: '',
        },
        {
          alt: 'img 2',
          src: '',
          caption: '',
          text: '',
        },
      ],
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      winHeight: '480',
      winWidth: '1024',
    }
  },
  mounted() {
    window.onresize = this.reCalcSize
    this.winHeight = document.documentElement.clientHeight
    this.winWidth = document.documentElement.clientWidth
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    reCalcSize() {
      this.winHeight = document.documentElement.clientHeight
      this.winWidth = document.documentElement.clientWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.img-cover {
  object-fit: cover;
}

// #carousel-1 {
//   text-shadow: 1px 1px 2px #333;
// }
</style>

<style>
.carousel-caption {
  color: var(--color-cap);
}
</style>
