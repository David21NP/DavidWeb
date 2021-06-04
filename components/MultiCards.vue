<template>
  <b-container class="mt-3">
    <b-row v-for="(row, idr) in rows" :key="idr">
      <b-col
        v-for="(item, idc) in row"
        :key="idc"
        lg="4"
        md="6"
        cols="12"
        class="mb-5"
      >
        <b-card
          v-if="item !== undefined"
          :title="item.title"
          header-tag="header"
          :img-src="item.imgsrc"
          :img-alt="item.imgalt"
          img-height="160"
          class="m-auto"
          style="max-width: 20rem !important"
          :bg-variant="bgColor"
          :text-variant="txColor"
        >
          <template #header>
            <h6 class="mb-0">{{ item.header }}</h6>
          </template>
          <b-card-text>{{ item.text }}</b-card-text>
          <b-button
            class="stretched-link"
            :href="btnhref(item.buttonaction)"
            :target="btnTarget(item.buttonaction)"
            :to="localePath(btnto(item.buttonaction))"
            :type="btntype(item.buttonaction)"
            variant="secondary"
          >
            {{ item.button }}
          </b-button>
          <template #footer>
            <em> {{ item.footer }} </em>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [
        {
          title: 'Card title',
          imgsrc: 'https://picsum.photos/600/300/?image=25',
          imgalt: 'Image',
          header: 'Card header',
          text: 'Card text',
          button: 'Go somewhere',
          buttonaction: { path: '/life' },
          footer: 'Card footer',
        },
      ],
    },
  },
  computed: {
    rows() {
      const rows = []
      for (let i = 0; i < this.cards.length; i += 3) {
        const row = []
        for (let j = 0; j < 3; j++) {
          row.push(this.cards[i + j])
        }
        rows.push(row)
      }
      return rows
    },
    bgColor() {
      return this.$colorMode.value === 'dark' ? 'dark' : 'light'
    },
    txColor() {
      return this.$colorMode.value === 'dark' ? 'light' : 'gray-800'
    },
  },
  mounted() {},
  methods: {
    btnTarget(link) {
      return typeof link === 'string' || link instanceof String
        ? link.includes('http')
          ? '_blank'
          : ''
        : ''
    },
    btnhref(link) {
      return typeof link === 'string' || link instanceof String
        ? link.includes('http')
          ? link
          : ''
        : ''
    },
    btnto(link) {
      return typeof link === 'string' || link instanceof String
        ? link.charAt(0) === '/'
          ? link
          : ''
        : link
    },
    btntype(link) {
      return typeof link === 'string' || link instanceof String
        ? ['button', 'submit', 'reset'].includes(link)
          ? link
          : 'button'
        : 'button'
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
}
</style>
