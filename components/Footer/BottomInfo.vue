<template>
  <b-container fluid class="mb-3 px-0">
    <b-row>
      <b-col
        md="4"
        cols="12"
        order-md="0"
        order="1"
        class="px-5 my-2 my-md-0 d-none d-md-flex"
      >
        <!-- <ColorModeBtn /> -->
        <Logo fill-color="light" :svg-escale="0.4" />
      </b-col>
      <b-col md="4" cols="12" order-md="0" order="0">
        <div class="py-2">
          <span class="align-middle material-icons md-18"> copyright </span>
          <span>David Carreño Pardo All Rights Reserved.</span>
        </div>
      </b-col>
      <b-col md="4" cols="12" order-md="0" order="2">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
          <b-img
            width="auto"
            height="25"
            src="https://nuxtjs.org/logos/built-with-nuxt-white.svg"
          />
        </a>
        <a
          href="https://bootstrap-vue.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b-img
            width="auto"
            height="25"
            src="https://bootstrap-vue.org/_nuxt/icons/icon_512x512.67aef2.png"
          />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>
