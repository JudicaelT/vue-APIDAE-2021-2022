<template>
  <div class="row bg-astra overflow-hidden rounded-rounder">
    <div class="col p-5">
      <small class="text-secondary text-uppercase ls-2"> - Plat du jour </small>
      <div class="my-3">
        <h1>{{ randomRecipe.nom }}</h1>
        <div class="d-flex">
          <p>
            <b-icon-people-fill></b-icon-people-fill>
            {{ randomRecipe.nbPersonne }} personnes
          </p>
          <p class="ml-2">
            <b-icon-clock-fill></b-icon-clock-fill>
            {{ randomRecipe.time }} minutes
          </p>
          <p class="ml-2">
            <b-icon-info-circle-fill></b-icon-info-circle-fill>
            {{ randomRecipe.level }}
          </p>
        </div>
      </div>

      <div class="btn-group" role="group">
        <router-link
          class="btn btn-dark rounded px-4 mr-3 shadow"
          :to="`/recette/${randomRecipe._id}`"
        >
          Voir la recette
        </router-link>
        <router-link
          class="btn btn-light rounded-circle d-flex align-items-center shadow"
          :to="`/ajouter_favori/${randomRecipe._id}`"
        >
          <b-icon-heart-fill class="text-warning"></b-icon-heart-fill>
        </router-link>
      </div>
    </div>

    <div class="col-5 bg-img d-flex align-items-center">
      <b-img
        class="img-fluid rounded-rounder"
        :src="getRandomIngredientImage()"
      ></b-img>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MealOfTheDay",
  computed: {
    ...mapState("recipes", ["randomRecipe"]),
  },
  beforeMount() {
    this.$store.dispatch("recipes/loadDailyRecipe");
  },
};
</script>

<style scoped>
  h1 {
    font-size: 60px !important;
  }

  .bg-img {
    background: radial-gradient(circle, #e4ddcc 0%, #eee2c3 35%, var(--astra) 75%);
  }
</style>