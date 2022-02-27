<template>
    <div class="row bg-salmon overflow-hidden rounded-rounder">
        <div class="col p-5 text-light">
            <small class="text-secondary text-uppercase ls-2">
                - Plat du jour
            </small>
            <div class="my-3">
                <h1>Lorem Ipsum</h1>
                <div class="d-flex">
                    <p>
                        <b-icon-people-fill></b-icon-people-fill>
                        3 personnes
                    </p>
                    <p class="ml-2">
                        <b-icon-clock-fill></b-icon-clock-fill>
                        25 minutes
                    </p>
                    <p class="ml-2">
                        <b-icon-info-circle-fill></b-icon-info-circle-fill>
                        Amateur
                    </p>
                </div>
            </div>

            <div class="btn-group" role="group">
                <button class="btn btn-yale rounded-pill px-4 mr-3 shadow">
                    Voir la recette
                </button>
                <button class="btn btn-light rounded-circle d-flex align-items-center shadow">
                    <b-icon-heart-fill class="text-warning"></b-icon-heart-fill>
                </button>
            </div>
        </div>
        
        <div class="col-5 bg-img d-flex align-items-center">
            <b-img fluid :src="getImageUrl('fried_chicken.png')"></b-img>
        </div>
    </div>
</template>
  
  <script>
    export default {
        name: "MealOfTheDay"
    };
  </script>
  
  <style scoped>
    h1 {
      font-size: 60px !important;
    }

    .bg-img {
      background: radial-gradient(circle, #f5ded8 0%, #f4d1c6 35%, #f5c0b2 75%);
    }
  
  </style>
  