<template>
  <footer
    class="my-footer container-fluid text-center align-content-center pb-2"
    :class="bgClass"
  >
    <b-container class="pt-5">
      <b-row class="text-left">
        <b-col md="2" sm="12" class="pb-3">
          <h5>About</h5>
          <b-nav vertical class="w-100" align="left">
            <CustomDropdown style-class="pl-0" title="About" :items="items" />
            <b-nav-item href="#about" link-classes="pl-0">Link</b-nav-item>
            <b-nav-item to="/life" link-classes="pl-0">Another Link</b-nav-item>
          </b-nav>
        </b-col>
        <b-col md="4" sm="12" class="pb-5">
          <h5>Contact me</h5>
          <ul class="p-0">
            <li>
              <span>Email: </span>
              <span>David.pardo@david-pardo.com</span>
            </li>
          </ul>
          <h5>Find me on the web</h5>
          <b-nav>
            <b-nav-item><b-icon-github></b-icon-github></b-nav-item>
            <b-nav-item><b-icon-linkedin></b-icon-linkedin></b-nav-item>
            <b-nav-item><b-icon-instagram></b-icon-instagram></b-nav-item>
          </b-nav>
        </b-col>
        <b-col md="6" sm="12">
          <ContactForm />
        </b-col>
      </b-row>
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
      default: 'dark-color',
    },
  },
  data() {
    return {
      items: [
        { name: 'One', link: '#' },
        { name: 'Two', link: '#' },
      ],
    }
  },
  computed: {
    bgClass() {
      return 'bg-'.concat(this.bgColor)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/custom_variables.scss';

.my-footer {
  font-family: var(--font-family-open-sans);
}

// a {
//   color: inherit !important;

//   &:hover {
//     color: inherit !important;
//   }
// }

ul {
  list-style: none;
}
</style>
