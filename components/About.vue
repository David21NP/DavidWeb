<template>
  <b-container id="about" class="mb-3 text-center">
    <b-jumbotron>
      <template #header>David Carreño Pardo</template>

      <template #lead>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus fuga
        fugit tempore praesentium nulla doloremque reprehenderit quam dolorum
        quisquam corporis delectus quasi nihil ab possimus, accusamus ipsum iste
        ad voluptas!
      </template>

      <hr class="my-4" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, alias
        eius a reiciendis quidem veniam! Ea accusantium eligendi aut ullam,
        porro quidem explicabo reiciendis cumque veniam. Vero non fugit ullam!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda
        voluptatibus quisquam ex est, nostrum cum ea veniam earum molestiae vel
        porro alias laborum eaque corporis aperiam, excepturi odit blanditiis.
      </p>

      <b-button variant="main-color" to="/life">Go to life</b-button>
      <b-button variant="main-color" to="/projects">Go to projects</b-button>
      <b-button variant="main-color" href="#related">Go to contact</b-button>
    </b-jumbotron>
  </b-container>
</template>

<style lang="scss" scoped>
#about {
  padding-top: 6rem !important;
  padding-bottom: 3rem !important;
}
</style>
