<template>
    <div class="row bg-astra overflow-hidden rounded-rounder">
        <div class="col p-5">
            <small class="text-secondary text-uppercase ls-2">
                - Plat du jour
            </small>
            <div class="my-3">
                <h1>{{ MealOfTheDay.name }}</h1>
                <div class="d-flex">
                    <p>
                        <b-icon-people-fill></b-icon-people-fill>
                        {{ MealOfTheDay.quantity }} personnes
                    </p>
                    <p class="ml-2">
                        <b-icon-clock-fill></b-icon-clock-fill>
                        {{ MealOfTheDay.time }} minutes
                    </p>
                    <p class="ml-2">
                        <b-icon-info-circle-fill></b-icon-info-circle-fill>
                        {{ MealOfTheDay.level }}
                    </p>
                </div>
            </div>

            <div class="btn-group" role="group">
                <router-link class="btn btn-dark rounded px-4 mr-3 shadow" :to="`/recette/${MealOfTheDay.id}`">
                    Voir la recette
                </router-link>
                <router-link class="btn btn-light rounded-circle d-flex align-items-center shadow" :to="`/ajouter_favori/${MealOfTheDay.id}`">
                    <b-icon-heart-fill class="text-warning"></b-icon-heart-fill>
                </router-link>
            </div>
        </div>
        
        <div class="col-5 bg-img d-flex align-items-center">
            <b-img fluid :src="getImageUrl( `${MealOfTheDay.thumbnail}` )"></b-img>
        </div>
    </div>
</template>
  
  <script>
    export default {
        name: "MealOfTheDay",
        data () {
        return {
          MealOfTheDay: {
              id: 1,
              name: 'RecetteDuJour',
              thumbnail: 'fried_chicken.png',
              quantity: 5,
              time: 20,
              level: 'amateur',
          },  
        }
      }
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
  