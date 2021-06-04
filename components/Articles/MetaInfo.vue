<template>
  <b-row class="pb-3" align-h="between">
    <b-col sm="6" cols="12" class="pr-0 mr-auto">
      {{ author }}
    </b-col>
    <b-col sm="auto" cols="12" class="mt-1">
      <b-row>
        <b-col class="pr-0" cols="auto">
          {{ updateAt }}
        </b-col>
        <b-col cols="auto">
          <b-icon-dot />
        </b-col>
        <b-col cols="auto" class="pl-0">
          <ul v-if="categories.length > 0" class="list-inline">
            <li
              v-for="(category, index) in categories"
              :key="index"
              class="list-inline-item"
            >
              <div v-if="index !== categories.length - 1">
                <b-link
                  :to="
                    localePath({
                      name: 'projects-cat',
                      params: { cat: category },
                    })
                  "
                  :class="
                    $colorMode.value === 'dark'
                      ? 'text-secondary'
                      : 'text-primary'
                  "
                >
                  {{ category }}
                </b-link>
                <b-icon-dash />
              </div>
              <div v-else>
                <b-link
                  :to="
                    localePath({
                      name: 'projects-cat',
                      params: { cat: category },
                    })
                  "
                  :class="
                    $colorMode.value === 'dark'
                      ? 'text-secondary'
                      : 'text-primary'
                  "
                >
                  {{ category }}
                </b-link>
              </div>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: '',
    },
    updateAt: {
      type: String,
      default: '',
    },
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
