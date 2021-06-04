<template>
  <footer
    class="container-fluid text-center align-content-center pb-2 open-sans"
    :class="`${bgClass} ${txClass}`"
  >
    <b-container class="pt-4">
      <b-nav align="center" pills>
        <b-nav-item
          :link-classes="txClass"
          href="https://github.com/David21NP"
          target="_blank"
        >
          <b-icon-github />
        </b-nav-item>
        <b-nav-item
          :link-classes="txClass"
          href="https://www.linkedin.com/in/david-pardo-2102"
          target="_blank"
        >
          <b-icon-linkedin />
        </b-nav-item>
        <!-- <b-nav-item
          :link-classes="txClass"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <b-icon-instagram />
        </b-nav-item> -->
      </b-nav>
      <b-nav align="center">
        <b-nav-item
          :link-classes="txClass"
          :to="localePath({ path: '/', hash: 'about' })"
        >
          {{ $t('navbar.about') }}
        </b-nav-item>
        <b-nav-item :link-classes="`px-0 ${txClass}`" disabled>
          <b-icon-dash />
        </b-nav-item>
        <b-nav-item :link-classes="txClass" :to="localePath({ path: '/life' })">
          {{ $t('navbar.life') }}
        </b-nav-item>
        <b-nav-item :link-classes="`px-0 ${txClass}`" disabled>
          <b-icon-dash />
        </b-nav-item>
        <b-nav-item
          :link-classes="txClass"
          :to="localePath({ path: '/projects' })"
        >
          {{ $t('navbar.projects') }}
        </b-nav-item>
        <b-nav-item :link-classes="`px-0 ${txClass}`" disabled>
          <b-icon-dash />
        </b-nav-item>
        <b-nav-item
          :link-classes="txClass"
          :to="localePath({ path: '/contact' })"
        >
          {{ $t('navbar.contact') }}
        </b-nav-item>
      </b-nav>
    </b-container>
    <hr class="mx-1 bg-light" />
    <BottomInfo />
  </footer>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'primary',
    },
    txColor: {
      type: String,
      default: 'light',
    },
  },
  computed: {
    bgClass() {
      return 'bg-'.concat(this.bgColor)
    },
    txClass() {
      return 'text-'.concat(this.txColor)
    },
  },
}
</script>
