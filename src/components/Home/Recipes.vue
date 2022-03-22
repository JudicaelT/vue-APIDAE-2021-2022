<template>
  <div class="row my-5">
    <Recipe
      v-for="(recipe, key) in recipes"
      :id="recipe._id"
      :name="recipe.nom"
      :quantity="recipe.nbPersonne"
      :time="recipe.time"
      :level="recipe.level"
      :thumbnail="recipe.thumbnail"
      :key="key"
    >
    </Recipe>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Recipe from "@/components/Home/Recipe";

export default {
  name: "Recipes",
  components: {
    Recipe,
  },
  computed: {
    ...mapState("recipes", ["recipes"]),
  },
  created() {
    this.$store.dispatch("recipes/loadRecipes");
  },
};
</script>

<style scoped>
</style>