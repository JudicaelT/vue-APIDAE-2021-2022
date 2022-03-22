<template>
  <div class="container">

    <Heading
    v-for="(rec, keyHeading) in recipe"
      :id="rec._id"
      :name="rec.nom"
      :thumbnail="rec.thumbnail"
      :nbLike="rec.likes"
      :description="rec.description"
      :key="keyHeading"
    >
    </Heading>

    <div class="row my-5">
      <Preparation
      v-for="(rec, keyPreparation) in recipe"
        :preparation="rec.preparation"
        :key="keyPreparation"
      >
      </Preparation>

      <Informations
      v-for="(rec, keyInformations) in recipe"
        :quantity="rec.nbPersonne"
        :time="rec.time"
        :level="rec.level"
        :ingredients="rec.lines"
        :key="keyInformations">
      >
      </Informations>
    </div>

  </div>
</template>
  
<script>
  import { mapState } from 'vuex';
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
    computed: {
      ...mapState('recipes', ['recipe'])
    },
    created() {
      this.$store.dispatch('recipes/loadRecipe')
    }
  };
</script>