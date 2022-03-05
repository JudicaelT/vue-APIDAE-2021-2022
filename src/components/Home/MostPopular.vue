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

        <MostPopularReceipt v-for="(mp, key) in mps" :id="mp.id" :name="mp.name" :thumbnail="mp.thumbnail" :key="key"></MostPopularReceipt>

      </div>
    </div>
  </div>
</template>
  
<script>

    import MostPopularReceipt from "@/components/Home/MostPopularReceipt";

    export default {
      name: "MostPopular",
      components: {
        MostPopularReceipt,
      },
      data () {
        return {
          mps: [
            {
              id: 1,
              name: 'Recette1',
              thumbnail: 'ghibli1.jpeg',
            },
            {
              id: 2,
              name: 'Recette2',
              thumbnail: 'fried_chicken.png',
            },
            {
              id: 3,
              name: 'Recette3',
              thumbnail: 'japanese_food.png',
            },
          ]
        }
      }
    };
</script>
  
<style scoped>

    .card-thumbnail {
        min-height: 110px;
    }

    .card {
        min-width: 220px;
    }
</style>