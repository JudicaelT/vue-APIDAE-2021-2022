<template>
    <div class="row my-5">
        <div class="col text-center text-lg-left">
            <h2 class="text-yale">Les plus populaires</h2>
            <p>
                Voici les recettes qui ont été le plus apprécié par les utilisateurs.
            </p>
        </div>
        <div class="col-12 col-lg-8 rounded-rounder p-3 bg-astra">
            <div class="row overflow-auto flex-nowrap">

              <div class="card rounded-rounder overflow-hidden mx-3">
                <div class="card-thumbnail overflow-hidden d-flex align-items-center">
                  <img class="card-img-top" :src="getImageUrl('ghibli1.jpeg')">
                </div>
                <div class="h-0 d-flex justify-content-center align-items-center">
                  <button class="btn btn-light btn-height position-absolute rounded-circle d-flex align-items-center">
                    <b-icon-heart-fill class="text-warning"></b-icon-heart-fill>
                  </button>
                </div>
                <div class="card-body text-center py-4">
                  <h5 class="card-title">Nom de la recette</h5>
                  <a href="#" class="btn btn-yale">Voir</a>
                </div>
              </div>

              <div class="card rounded-rounder overflow-hidden mx-3">
                <div class="card-thumbnail overflow-hidden d-flex align-items-center">
                  <img class="card-img-top" :src="getImageUrl('ghibli1.jpeg')">
                </div>
                <div class="h-0 d-flex justify-content-center align-items-center">
                  <button class="btn btn-light btn-height position-absolute rounded-circle d-flex align-items-center">
                    <b-icon-heart-fill class="text-warning"></b-icon-heart-fill>
                  </button>
                </div>
                <div class="card-body text-center py-4">
                  <h5 class="card-title">Nom de la recette</h5>
                  <a href="#" class="btn btn-yale">Voir</a>
                </div>
              </div>
                
              <div class="card rounded-rounder overflow-hidden mx-3">
                <div class="card-thumbnail overflow-hidden d-flex align-items-center">
                  <img class="card-img-top" :src="getImageUrl('ghibli1.jpeg')">
                </div>
                <div class="h-0 d-flex justify-content-center align-items-center">
                  <button class="btn btn-light btn-height position-absolute rounded-circle d-flex align-items-center">
                    <b-icon-heart-fill class="text-warning"></b-icon-heart-fill>
                  </button>
                </div>
                <div class="card-body text-center py-4">
                  <h5 class="card-title">Nom de la recette</h5>
                  <a href="#" class="btn btn-yale">Voir</a>
                </div>
              </div>

            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: "MostPopular",
    };

    /**
     * Dynamically changes the height of the thumbnail (60% of the current width)
     */
    function resizeCardThumbnail() {
      let cardThumbnails = document.querySelectorAll('.card-thumbnail');

      cardThumbnails.forEach(function(cardThumbnail) {
          cardThumbnail.style.height = cardThumbnail.offsetWidth * 0.6 +"px";
      });
    }


    // call resizeCardThumbnail() when the document is fully loaded
    window.addEventListener('load', () => { resizeCardThumbnail() });

    // call resizeCardThumbnail() when the window is resized
    window.addEventListener('resize', () => { resizeCardThumbnail() });
    
</script>
  
<style scoped>

    .card-thumbnail {
        min-height: 110px;
    }

    .card {
        min-width: 220px;
    }
</style>