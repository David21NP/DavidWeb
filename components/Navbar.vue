<template>
  <b-navbar
    id="top-nav"
    class="nav-anim open-sans"
    :class="`${navShadow} text-${navTextColor}`"
    :variant="navColor"
    fixed="top"
  >
    <div class="ml-md-5">
      <div class="ml-md-5">
        <div class="ml-lg-5">
          <b-navbar-brand class="ml-xl-5" :to="localePath({ path: '/' })">
            <Logo :fill-color="`${navTextColor}`" :svg-escale="0.8" />
          </b-navbar-brand>
        </div>
      </div>
    </div>

    <div class="ml-auto mr-lg-5 text-uppercase">
      <div class="mr-md-3">
        <b-navbar-nav class="mr-md-5">
          <div class="d-none d-lg-flex">
            <b-nav-item
              :link-classes="`text-${navTextColor}`"
              :to="localePath({ path: '/life' })"
            >
              {{ $t('navbar.life') }}
            </b-nav-item>
            <b-nav-item
              :link-classes="`text-${navTextColor}`"
              :to="localePath({ path: '/projects' })"
            >
              {{ $t('navbar.projects') }}
            </b-nav-item>
            <b-nav-item
              :link-classes="`text-${navTextColor}`"
              :to="localePath({ path: '/', hash: 'about' })"
            >
              {{ $t('navbar.about') }}
            </b-nav-item>
            <b-nav-item
              :link-classes="`text-${navTextColor}`"
              :to="localePath({ path: '/contact' })"
            >
              {{ $t('navbar.contact') }}
            </b-nav-item>
          </div>
          <b-nav-item
            :link-classes="`text-${navTextColor}`"
            @click="btnColorMode"
          >
            <div
              v-if="
                $colorMode.preference === 'dark' || $colorMode.value === 'dark'
              "
            >
              <span class="align-middle material-icons md-24"> dark_mode </span>
            </div>
            <div v-else-if="$colorMode.preference === 'light'">
              <span class="align-middle material-icons md-24">
                light_mode
              </span>
            </div>
          </b-nav-item>
          <LangDropdown
            class="text-uppercase"
            :variant="navColor"
            :langs="availableLocales"
            :style-class="`text-${navTextColor}`"
          >
            <template #special-content>
              <span
                :class="`align-middle material-icons md-24 text-${navTextColor}`"
              >
                translate
              </span>
            </template>
          </LangDropdown>
        </b-navbar-nav>
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {
  props: {
    navColor: {
      type: String,
      default: 'transparent',
    },
    navTextColor: {
      type: String,
      default: '',
    },
    navShadow: {
      type: String,
      default: '',
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    btnColorMode(ev) {
      if (this.$colorMode.preference === 'dark') {
        //   this.$colorMode.preference = 'system'
        // } else if (this.$colorMode.preference === 'system') {
        this.$colorMode.preference = 'light'
      } else if (this.$colorMode.preference === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-anim {
  -webkit-transition: background-color 500ms;
  -moz-transition: background-color 500ms;
  -ms-transition: background-color 500ms;
  -o-transition: background-color 500ms;
  transition: background-color 500ms;
}
</style>
