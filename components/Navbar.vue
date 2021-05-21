<template>
  <b-navbar
    class="nav-anim my-nav"
    :class="navShadow"
    toggleable="lg"
    :type="navTextColor"
    :variant="navColor"
    fixed="top"
  >
    <div class="ml-md-5">
      <div class="ml-lg-5">
        <b-navbar-brand class="ml-xl-5" to="/">
          David Carreño Pardo
        </b-navbar-brand>
      </div>
    </div>

    <b-navbar-toggle target="nav-collapse" class="border-light text-light">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/life"> My life </b-nav-item>
        <b-nav-item to="/projects"> My projects </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">
            Search
          </b-button>
        </b-nav-form>

        <CustomDropdown :variant="navColor" title="Lang" :items="items_1" />

        <CustomDropdown :items="items_2">
          <template #special-content>
            <em>About</em>
          </template>
        </CustomDropdown>
      </b-navbar-nav>
    </b-collapse>
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
  data() {
    return {
      items_1: [
        { name: 'EN', link: '/' },
        { name: 'ES', link: '#about' },
        { name: 'RU', link: '#related' },
        { name: 'FA', link: 'https://www.google.com/' },
      ],
      items_2: [
        { name: 'Profile', link: '#' },
        { name: 'Sign Out', link: '#' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/custom_variables.scss';

.my-nav {
  font-family: var(--font-family-open-sans);
  font-size: 15px;
}

.nav-anim {
  -webkit-transition: background-color 500ms;
  -moz-transition: background-color 500ms;
  -ms-transition: background-color 500ms;
  -o-transition: background-color 500ms;
  transition: background-color 500ms;
}
</style>
