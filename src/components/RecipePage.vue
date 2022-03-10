<template>
  <div class="container">

    <Heading
      :id="RecipeData.id"
      :name="RecipeData.name"
      :thumbnail="RecipeData.thumbnail"
      :nbLike="RecipeData.nbLike"
      :description="RecipeData.description"
    >
    </Heading>

    <div class="row my-5">
      <Preparation
        :preparation="RecipeData.preparation"
      >
      </Preparation>

      <Informations
        :informations="RecipeData.informations"
        :ingredients="RecipeData.ingredients"
      >
      </Informations>
    </div>

  </div>
</template>
  
<script>
  import Heading from "@/components/RecipePage/Heading";
  import Preparation from "@/components/RecipePage/Preparation";
  import Informations from "@/components/RecipePage/Informations";

  export default {
    name: "RecipePage",
    components: {
      Heading,
      Preparation,
      Informations
    },
    data () {
			return {
				RecipeData: {
          id: 1,
          name: 'Recette1',
          thumbnail: 'cassoulet.webp',
          nbLike: 65,
          description: 'Lorem',
          preparation: 'Lorem Ipsum',
          informations: {
            quantity: 5,
            time: 20,
            level: 'amateur',
          },
          ingredients: [
            {
              name: 'patates',
              quantity: 1,
              typeQuantity: 'kg',
            },
            {
              name: 'carrotes',
              quantity: 500,
              typeQuantity: 'g',
            },
            {
              name: 'Eau',
              quantity: 400,
              typeQuantity: 'ml',
            },
          ],
        },
			}
		}
  };
</script>