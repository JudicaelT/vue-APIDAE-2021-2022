<template>
  <div class="row my-5">
    <Recipe
      v-for="(recipe, key) in recipes"
      :id="recipe._id"
      :name="recipe.nom"
      :thumbnail="require('@/assets/img/' + recipe.thumbnail)"
      :quantity="recipe.nbPersonne"
      :time="recipe.time"
      :level="recipe.level"
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
      this.$store.state.auth?.user?.tokenJWT
  },
};
</script>

<style scoped>
</style>