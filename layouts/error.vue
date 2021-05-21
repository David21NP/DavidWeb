<template>
  <b-container style="padding-top: 6rem !important" class="pt-5 text-center">
    <b-jumbotron>
      <template #header>
        <div v-if="statusCode !== 404">
          <b-icon-exclamation-circle variant="danger" /> {{ e_title }} :
          {{ statusCode }}
        </div>
        <div v-else>
          <b-icon-exclamation-circle variant="danger" /> {{ e_title }}
        </div>
      </template>

      <template #lead>
        {{ message }}
      </template>

      <hr class="my-4" />

      <b-row>
        <b-col v-if="statusCode === 404" cols="6" class="text-right">
          <b-button
            v-if="typeof $route === 'undefined'"
            variant="dark-color"
            href="/"
          >
            {{ m_messages.back_to_home }}
          </b-button>
          <b-button v-else variant="dark-color" to="/">
            {{ m_messages.back_to_home }}
          </b-button>
        </b-col>
        <!-- <div v-else>{{ error }}</div> -->
        <b-col
          :cols="statusCode === 404 ? 6 : 12"
          :class="statusCode === 404 ? 'text-left' : 'text-center'"
        >
          <a href="https://nuxtjs.org" target="_blank" rel="noopener">
            <b-img
              width="auto"
              height="30"
              src="https://nuxtjs.org/logos/nuxtjs-typo.svg"
              :alt="m_messages.nuxtjs"
            >
            </b-img>
          </a>
        </b-col>
      </b-row>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  props: {
    error: {
      type: [Object, Error],
      default: () => {},
    },
  },
  data() {
    return {
      m_messages: {
        back_to_home: 'Return to home page',
        nuxtjs: 'Nuxt.js',
      },
      e_title: 'An error occurred',
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'Error'
    },
  },
}
</script>
