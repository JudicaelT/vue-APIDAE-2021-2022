<template>
  <div class="card rounded-rounder overflow-hidden mx-3">
    <div class="thumbnail overflow-hidden d-flex align-items-center">
      <b-img
        fluid
        :src="`https://cookclico-3218.restdb.io/media/${thumbnail}`"
      ></b-img>
    </div>
    <div class="h-0 d-flex justify-content-center align-items-center">
      <router-link
        class="btn btn-light btn-height position-absolute rounded-circle d-flex align-items-center"
        :to="`/ajouter_favori/${id}`"
      >
        <b-icon-heart-fill class="text-warning"></b-icon-heart-fill>
      </router-link>
    </div>
    <div class="card-body text-center py-4">
      <h5 class="card-title py-2">{{ name }}</h5>
      <router-link
        class="btn border-2 rounded-0 font-weight-bold btn-outline-dark"
        :to="`/recette/${id}`"
        >Voir
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MostPopularRecipe",
  props: ["id", "name", "thumbnail"],

  mounted() {
    this.setThumbnailHeight(0.6); // 60%
  },
};
</script>

<style scoped>
.thumbnail {
  min-height: 110px;
}

.card {
  min-width: 220px;
}
</style>