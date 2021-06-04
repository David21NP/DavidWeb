<template>
  <div class="open-sans" style="padding-top: 8rem">
    <h1
      class="font-weight-bolder text-center display-4"
      :class="$colorMode.value === 'dark' ? 'text-light' : ''"
    >
      {{ $t('projects.title') }}
    </h1>
    <MultiCards class="open-sans" :cards="loadedCards" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $content, params, i18n }) {
    const categoryM = params.cat
    const whereParam = params.cat
      ? { categories: { $contains: params.cat } }
      : ''
    // console.log(whereParam)
    const articles = await $content(`${i18n.locale}/projects`)
      .only([
        'title',
        'description',
        'img',
        'alt',
        'slug',
        'author',
        'createdAt',
        'updatedAt',
        'categories',
      ])
      .where(whereParam)
      .sortBy('createdAt', 'asc')
      .fetch()

    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(i18n.locale, options)
    }
    const loadedCards = []
    for (const article of articles) {
      loadedCards.push({
        title: article.title,
        imgsrc: article.img,
        imgalt: article.alt,
        header: article.categories.join(', '),
        text: article.description,
        button: 'Read more',
        buttonaction: {
          name: 'projects-cat-slug',
          params: { cat: article.categories[0], slug: article.slug },
        },
        footer: `${article.author.name} / ${formatDate(article.updatedAt)}`,
      })
    }
    return {
      articles,
      loadedCards,
      categoryM,
    }
  },
  head() {
    return {
      title: `${this.categoryM} - DavidWeb`,
    }
  },
}
</script>
