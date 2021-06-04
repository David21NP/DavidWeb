<template>
  <div>
    <b-form-input
      id="search-field"
      v-model="searchQuery"
      type="search"
      size="md"
      class="mr-sm-2"
      :placeholder="`${$t('article.search.placeholder')}`"
      @focus="focus = true"
      @blur="focus = false"
    ></b-form-input>
    <b-popover
      id="search-results"
      target="search-field"
      triggers="manual"
      :show="activatePop"
      placement="bottom"
      custom-class="shadow"
    >
      <h6 class="font-weight-regular">
        {{ $t('article.search.results') }}
      </h6>
      <hr />
      <b-list-group>
        <b-list-group-item
          v-for="article of articles"
          :key="article.slug"
          :to="
            localePath({
              name: 'projects-cat-slug',
              params: { cat: article.categories[0], slug: article.slug },
            })
          "
          class="border-0"
        >
          <div class="w-100">
            {{ article.title }}
          </div>
          <small> {{ article.description }} </small>
        </b-list-group-item>
      </b-list-group>
      <!-- <b-row v-for="article of articles" :key="article.slug">
          <b-col>
            <b-link
              :to="{ name: 'projects-slug', params: { slug: article.slug } }"
            >
              <h5>{{ article.title }}</h5>
            </b-link>
          </b-col>
        </b-row> -->
    </b-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
      focus: false,
    }
  },
  computed: {
    activatePop() {
      return this.focus && this.articles.length > 0
    },
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content(`${this.$i18n.locale}/projects`)
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>
