<template>
    <div class="row my-5">
        <Recipe
        v-for="(Recipe, key) in Recipes"
            :id="Recipe.id" :name="Recipe.name"
            :thumbnail="Recipe.thumbnail"
            :quantity="Recipe.quantity"
            :time="Recipe.time"
            :level="Recipe.level"
            :key="key">
        </Recipe>
    </div>
</template>
  
<script>
    import Recipe from "@/components/Home/Recipe";

    export default {
      name: "Recipes",
      components: {
        Recipe,
      },
      data () {
        return {
          Recipes: [
            {
              id: 1,
              name: 'Recette1',
              thumbnail: 'ghibli1.jpeg',
              quantity: 5,
              time: 20,
              level: 'amateur',
            },
            {
              id: 2,
              name: 'Recette2',
              thumbnail: 'fried_chicken.png',
              quantity: 7,
              time: 15,
              level: 'débutant',
            },
            {
              id: 3,
              name: 'Recette3',
              thumbnail: 'japanese_food.png',
              quantity: 2,
              time: 25,
              level: 'expert',
            },
          ]
        }
      }
    };
</script>
  
<style scoped>
</style>