<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex justify-content-center align-items-center">
        <form class="d-flex flex-column w-100" v-on:submit.prevent="addRecipe">
          <AddInformations @setInformations="setInformations"></AddInformations>
          <AddIngredient @setIngredients="setIngredients"></AddIngredient>

          <input class="btn btn-astra rounded-pill py-2 mt-4 mb-5 w-100" type="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import AddInformations from "@/components/AddRecipe/AddInformations";
  import AddIngredient from "@/components/AddRecipe/AddIngredient";

  export default {
    name: "AddRecipe",

    components: {
      AddInformations,
      AddIngredient,
    },

    data() {
      return {
        name: '',
        description: '',
        quantity: '',
        time: '',
        level: '',
        likes: 0,
        preparation: '',
        thumbnail: '',
        ingredients: [],
      }
    },

    methods: {

      setInformations: function (name, description, quantity, time, level, preparation, thumbnail) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.time = time;
        this.level = level;
        this.preparation = preparation;
        this.thumbnail = thumbnail;
      },


      setIngredients: function (ingredients) {
        this.ingredients = ingredients;
      },


      addRecipe: function () {

        this.$store.dispatch("recipes/addRecipe", {
          nom: this.name,
          description: this.description,
          nbPersonne: this.quantity,
          time: this.time,
          level: this.level,
          likes: this.likes,
          preparation: this.preparation,
          thumbnail: this.thumbnail,
          lines: this.ingredients,
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          alert('Une erreur est survenue lors de l\'enregistrement');
        })
      },

    },
  };
</script>