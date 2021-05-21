<template>
  <b-container style="margin-top: 3.5rem" class="pt-5">
    <b-row v-for="(row, idr) in rows" :key="idr" class="mb-5">
      <b-col v-for="(item, idc) in row" :key="idc" :cols="cols">
        <b-card
          :title="item.title"
          header-tag="header"
          footer-tag="footer"
          :img-src="item.imgsrc"
          :img-alt="item.imgalt"
          img-top
          style="max-width: 20rem !important"
          :bg-variant="bgColor(idc + idr * itemsPerRow)"
        >
          <template #header>
            <h6 class="mb-0">{{ item.header }}</h6>
          </template>
          <b-card-text>{{ item.text }}</b-card-text>
          <b-button
            :href="btnhref(idc + idr * itemsPerRow)"
            :to="btnto(idc + idr * itemsPerRow)"
            :type="btntype(idc + idr * itemsPerRow)"
            :variant="btnColor(idc + idr * itemsPerRow)"
            >{{ item.button }}</b-button
          >
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
          buttonaction: '/life',
          footer: 'Card footer',
        },
        {
          title: 'Card title',
          imgsrc: 'https://picsum.photos/600/300/?image=25',
          imgalt: 'Image',
          header: 'Card header',
          text: 'Card text',
          button: 'Go somewhere',
          buttonaction: '',
          footer: 'Card footer',
        },
        {
          title: 'Card title',
          imgsrc: 'https://picsum.photos/600/300/?image=25',
          imgalt: 'Image',
          header: 'Card header',
          text: 'Card text',
          button: 'Go somewhere',
          buttonaction: '',
          footer: 'Card footer',
        },
        {
          title: 'Card title',
          imgsrc: 'https://picsum.photos/600/300/?image=25',
          imgalt: 'Image',
          header: 'Card header',
          text: 'Card text',
          button: 'Go somewhere',
          buttonaction: 'submit',
          footer: 'Card footer',
        },
        {
          title: 'Card title',
          imgsrc: 'https://picsum.photos/600/300/?image=25',
          imgalt: 'Image',
          header: 'Card header',
          text: 'Card text',
          button: 'Go somewhere',
          buttonaction: '',
          footer: 'Card footer',
        },
        {
          title: 'Card title',
          imgsrc: 'https://picsum.photos/600/300/?image=25',
          imgalt: 'Image',
          header: 'Card header',
          text: 'Card text',
          button: 'Go somewhere',
          buttonaction: '',
          footer: 'Card footer',
        },
      ],
    },
    itemsPerRow: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    rows() {
      const rows = []
      for (let i = 0; i < this.cards.length; i += this.itemsPerRow) {
        const row = []
        for (let j = 0; j < this.itemsPerRow; j++) {
          row.push(this.cards[i + j])
        }
        rows.push(row)
      }
      return rows
    },
    cols() {
      return Math.round(12 / this.itemsPerRow)
    },
  },
  mounted() {},
  methods: {
    bgColor(i) {
      return i % 2 === 0 ? 'main-color' : 'second-color'
    },
    btnColor(i) {
      return i % 2 === 0 ? 'second-color' : 'accent-color'
    },
    btnhref(i) {
      return this.cards[i].buttonaction.includes('http')
        ? this.cards[i].buttonaction
        : ''
    },
    btnto(i) {
      return this.cards[i].buttonaction.charAt(0) === '/'
        ? this.cards[i].buttonaction
        : ''
    },
    btntype(i) {
      return ['button', 'submit', 'reset'].includes(this.cards[i].buttonaction)
        ? this.cards[i].buttonaction
        : 'button'
    },
  },
}
</script>
