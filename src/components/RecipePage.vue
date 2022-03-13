<template>
  <div class="container">

    <Heading
    v-for="(rec, key) in recipe"
      :id="rec._id"
      :name="rec.nom"
      :thumbnail="rec.thumbnail"
      :nbLike="rec.likes"
      :description="rec.description"
      :key="key"
    >
    </Heading>

    <div class="row my-5">
      <Preparation
      v-for="(rec, key) in recipe"
        :preparation="rec.description"
        :key="key"
      >
      </Preparation>

      <Informations
      v-for="(rec, key) in recipe"
        :quantity="rec.nbPersonne"
        :time="rec.time"
        :level="rec.level"
        :ingredients="rec.lines"
        :key="key">
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