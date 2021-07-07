<template>
  <div>
    <Navbar :nav-color="color" :nav-text-color="texto" :nav-shadow="shadow" />
    <NavBottom
      :class="navbClass"
      :nav-color="colorBtm"
      :nav-text-color="texto"
      :nav-shadow="shadow"
    />
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
    colorBtm() {
      return this.$colorMode.value === 'light' ? 'primary' : 'gray-700'
    },
    navbClass() {
      return (this.$route.path !== this.locale &&
        this.$route.path !== `${this.locale}/`) ||
        this.scrollY > 35
        ? 'd-block d-lg-none'
        : 'd-none'
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
    const bodyElement = document.querySelector('body')
    bodyElement.classList.add('pb-5')
    bodyElement.classList.add('mb-4')
    bodyElement.classList.add('pb-lg-0')
    bodyElement.classList.add('mb-lg-0')
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
    const bodyElement = document.querySelector('body')
    bodyElement.classList.remove('pb-5')
    bodyElement.classList.remove('mb-4')
    bodyElement.classList.remove('pb-lg-0')
    bodyElement.classList.remove('mb-lg-0')
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
