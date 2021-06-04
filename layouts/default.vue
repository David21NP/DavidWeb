<template>
  <div>
    <Navbar :nav-color="color" :nav-text-color="texto" :nav-shadow="shadow" />
    <Nuxt />
    <Footer id="info" :bg-color="main_color" tx-color="light" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
    }
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  computed: {
    locale() {
      return `/${
        this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0].code
      }`
    },
    main_color() {
      return this.$colorMode.value === 'light' ? 'primary' : 'dark'
    },
    color() {
      return (this.$route.path !== this.locale &&
        this.$route.path !== `${this.locale}/`) ||
        this.scrollY > 35
        ? this.main_color
        : 'transparent'
    },
    texto() {
      return (this.$route.path !== this.locale &&
        this.$route.path !== `${this.locale}/`) ||
        this.scrollY > 35
        ? 'light'
        : this.$colorMode.value === 'light'
        ? 'dark'
        : 'light'
    },
    shadow() {
      return (this.$route.path !== this.locale &&
        this.$route.path !== `${this.locale}/`) ||
        this.scrollY > 35
        ? 'shadow'
        : ''
    },
  },
  watch: {
    $route(to, from) {
      this.checkTop()
    },
  },
  mounted() {
    this.checkTop()
    window.addEventListener('scroll', this.checkTop)
    /* window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    window.scrollBy({
      top: 0,
      left: 0,
      behavior: 'smooth',
    }) */
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkTop)
  },
  methods: {
    checkTop() {
      this.scrollY = window.scrollY
    },
  },
}
</script>

<style lang="scss">
html {
  font-family: var(--font-family-open-sans);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.open-sans {
  font-family: var(--font-family-open-sans);
}
</style>
