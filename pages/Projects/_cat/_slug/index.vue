<template>
  <b-container class="pb-3 open-sans" style="padding-top: 8rem">
    <b-row class="pb-5">
      <b-col class="back-link font-weight-bolder mt-3" sm="5" cols="12">
        <b-link
          :to="localePath({ name: 'projects' })"
          :class="
            $colorMode.value === 'dark' ? 'text-secondary' : 'text-primary'
          "
        >
          <b-icon-arrow-left />
          {{ $t('article.backbtn') }}
        </b-link>
      </b-col>
      <b-col class="mt-3" sm="6" lg="4" cols="12">
        <SearchArticles />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="9">
        <article>
          <h1 :class="$colorMode.value === 'dark' ? 'text-light' : 'text-dark'">
            {{ article.title }}
          </h1>
          <MetaInfo
            :class="$colorMode.value === 'dark' ? 'text-light' : 'text-dark'"
            :author="article.author.name"
            :update-at="formatDate(article.updatedAt)"
            :categories="article.categories"
          />
          <b-row>
            <b-col>
              <b-img fluid class="pb-3" :src="article.img" :alt="article.alt" />
            </b-col>
          </b-row>
          <p
            :class="$colorMode.value === 'dark' ? 'text-light' : 'text-dark'"
            class="pb-5"
          >
            {{ article.description }}
          </p>
          <div
            :class="$colorMode.value === 'dark' ? 'text-light' : 'text-dark'"
          >
            <nuxt-content :document="article" />
          </div>
          <PrevNext class="font-weight-bolder" :prev="prev" :next="next" />
        </article>
      </b-col>
      <RelatedArticles :list-related="listArticles" />
    </b-row>
  </b-container>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $content, params, i18n }) {
    const article = await $content(
      `${i18n.locale}/projects`,
      params.slug
    ).fetch()

    const [prev, next] = await $content(`${i18n.locale}/projects`)
      .only(['title', 'slug', 'categories'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    const listArticles = await $content(`${i18n.locale}/projects`)
      .only(['title', 'slug', 'categories'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .where({
        slug: { $ne: params.slug },
      })
      .fetch()

    return { article, prev, next, listArticles }
  },
  head() {
    return {
      title: `${this.article.title} - DavidWeb`,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(this.$i18n.locale, options)
    },
  },
}
</script>

<style lang="scss" scoped>
.back-link {
  a {
    color: var(--primary);
  }

  a:hover {
    color: var(--secondary);
  }
}
</style>

<style>
.nuxt-content22 {
  color: red;
}
</style>
