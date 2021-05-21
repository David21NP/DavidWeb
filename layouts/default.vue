<template>
  <div>
    <Navbar
      id="top-nav"
      :nav-color="color"
      :nav-text-color="texto"
      :nav-shadow="shadow"
    />
    <Nuxt />
    <Footer id="related" :bg-color="main_color" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'vtransparent',
      texto: '',
      shadow: '',
      main_color: 'main-color',
    }
  },
  watch: {
    $route() {
      this.checkTop()
    },
  },
  mounted() {
    this.checkTop()
    window.addEventListener('scroll', this.checkTop)
    window.scroll({
      top: 2500,
      left: 0,
      behavior: 'smooth',
    })

    window.scrollBy({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    window.addEventListener('hashchange', () => {
      let scrollV
      let scrollH
      const loc = window.location
      if ('pushState' in history)
        history.pushState('', document.title, loc.pathname + loc.search)
      else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop
        scrollH = document.body.scrollLeft

        loc.hash = ''

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV
        document.body.scrollLeft = scrollH
      }
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkTop)
  },
  methods: {
    checkTop() {
      if (this.$route.path !== '/') {
        this.color = this.main_color
        this.texto = ''
        this.shadow = 'shadow'
      } else if (window.scrollY < 35) {
        this.color = 'vtransparent'
        this.texto = ''
        this.shadow = ''
      } else {
        this.color = this.main_color
        this.texto = ''
        this.shadow = 'shadow'
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/css/custom_variables.scss';

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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--dark-color);
  color: var(--dark-color);
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: var(--dark-color);
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--light-color);
  color: var(--light-color);
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: var(--light-color);
}
</style>
