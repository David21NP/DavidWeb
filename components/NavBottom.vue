<template>
  <b-navbar
    id="bottom-nav"
    class="navb-anim open-sans"
    :class="`${navShadow} text-${navTextColor}`"
    :variant="navColor"
    fixed="bottom"
  >
    <b-navbar-nav class="mx-auto">
      <b-nav-item
        :link-classes="`text-${navTextColor}`"
        :to="localePath({ path: '/life' })"
        class="mx-auto"
      >
        <b-icon-person class="w-100" />
        <div class="small text-center">
          {{ $t('navbar.life') }}
        </div>
      </b-nav-item>
      <b-nav-item
        :link-classes="`text-${navTextColor}`"
        :to="localePath({ path: '/projects' })"
        class="mx-auto"
      >
        <b-icon-folder class="w-100" />
        <div class="small text-center">
          {{ $t('navbar.projects') }}
        </div>
      </b-nav-item>
      <b-nav-item
        :link-classes="`text-${navTextColor}`"
        :to="localePath({ path: '/', hash: 'about' })"
        class="mx-auto"
      >
        <b-icon-info-circle class="w-100" />
        <div class="small text-center">
          {{ $t('navbar.about') }}
        </div>
      </b-nav-item>
      <b-nav-item
        :link-classes="`text-${navTextColor}`"
        :to="localePath({ path: '/contact' })"
        class="mx-auto"
      >
        <b-icon-telephone class="w-100" />
        <!-- <span
          class="align-middle material-icons-outlined w-100 text-center md-18"
        >
          contact_mail
        </span> -->
        <div class="small text-center">
          {{ $t('navbar.contact') }}
        </div>
      </b-nav-item>
    </b-navbar-nav>
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
}
</script>

<style lang="scss" scoped>
.navb-anim {
  -webkit-transition: all 500ms;
  -moz-transition: all 500ms;
  -ms-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
}
</style>
