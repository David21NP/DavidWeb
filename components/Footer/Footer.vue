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
          <b-icon-github font-scale="2" />
        </b-nav-item>
        <b-nav-item
          :link-classes="txClass"
          href="https://www.linkedin.com/in/david-pardo-2102"
          target="_blank"
        >
          <b-icon-linkedin font-scale="2" />
        </b-nav-item>
        <b-nav-item id="showMail" :link-classes="txClass" @click="copyMail">
          <b-icon-mailbox font-scale="2" />
        </b-nav-item>
        <b-tooltip
          target="showMail"
          :show="showTootip"
          triggers="hover manual"
          variant="gray-700"
        >
          {{ emailTootip }}
        </b-tooltip>
        <!-- <b-nav-item
          :link-classes="txClass"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <b-icon-instagram />
        </b-nav-item> -->
      </b-nav>
      <b-nav align="center d-none d-lg-flex">
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
  data() {
    return {
      tooltipMessage: this.$t('footer.emailHover'),
      copyState: 0,
      showTootip: false,
      allowed: false,
    }
  },
  computed: {
    bgClass() {
      return 'bg-'.concat(this.bgColor)
    },
    txClass() {
      return 'text-'.concat(this.txColor)
    },
    emailTootip() {
      return this.copyState === 0
        ? this.$t('footer.emailHover')
        : this.copyState === 1
        ? this.$t('footer.emailCopy')
        : this.$t('footer.emailNotCopy')
    },
  },
  mounted() {
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        this.allowed = true
      }
    })
  },
  methods: {
    copyMail() {
      if (this.allowed) {
        navigator.clipboard.writeText('ndavidcp@gmail.com').then(
          () => {
            this.showTootip = true
            this.copyState = 1
            setTimeout(() => {
              this.showTootip = false
              this.copyState = 0
            }, 3000)
          },
          () => {
            this.showTootip = true
            this.copyState = 2
            setTimeout(() => {
              this.showTootip = false
              this.copyState = 0
            }, 3000)
          }
        )
      } else {
        this.showTootip = true
        this.copyState = 2
        setTimeout(() => {
          this.showTootip = false
          this.copyState = 0
        }, 3000)
      }
    },
  },
}
</script>
