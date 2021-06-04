<template>
  <b-container style="padding-top: 10rem !important" class="pb-3 text-center">
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

      <b-row align-h="center">
        <b-col v-if="statusCode === 404" cols="12" md="4" class="mb-3 mb-md-0">
          <b-button
            v-if="typeof $route === 'undefined'"
            variant="primary"
            href="/"
          >
            {{ m_messages.back_to_home }}
          </b-button>
          <b-button v-else variant="primary" :to="localePath({ path: '/' })">
            {{ m_messages.back_to_home }}
          </b-button>
        </b-col>
        <!-- <div v-else>{{ error }}</div> -->
        <b-col cols="12" :md="statusCode === 404 ? 4 : 12">
          <a
            href="https://nuxtjs.org"
            target="_blank"
            rel="noopener"
            class="mr-auto"
          >
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
