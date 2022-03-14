<template>
  <div class="row my-5">
    <div class="col text-center text-lg-left">
      <h2>Les plus populaires</h2>
      <p>
        Voici les recettes qui ont été le plus apprécié par les utilisateurs.
      </p>
    </div>
    <div class="col-12 col-lg-8 rounded-rounder p-3 bg-grey">
      <div class="row overflow-auto flex-nowrap">

        <MostPopularRecipe v-for="(recipe, key) in mostPopularRecipes" :id="recipe._id" :name="recipe.nom" :thumbnail="recipe.thumbnail" :key="key"></MostPopularRecipe>

      </div>
    </div>
  </div>
</template>
  
<script>
    import { mapState } from 'vuex';
    import MostPopularRecipe from "@/components/Home/MostPopularRecipe";

    export default {
      name: "MostPopular",
      components: {
        MostPopularRecipe,
      },
      computed: {
        ...mapState('recipes', ['mostPopularRecipes'])
      },
      created() {
        this.$store.dispatch('recipes/loadMostPopularRecipes')
      }
    };
</script>
  
<style scoped>
  .card {
      min-width: 220px;
  }
</style>