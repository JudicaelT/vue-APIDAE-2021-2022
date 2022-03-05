<template>
    <div class="card rounded-rounder overflow-hidden mx-3">
        <div class="card-thumbnail overflow-hidden d-flex align-items-center">
            <b-img fluid :src="getImageUrl( `${thumbnail}` )"></b-img>
        </div>
        <div class="h-0 d-flex justify-content-center align-items-center">
            <router-link class="btn btn-light btn-height position-absolute rounded-circle d-flex align-items-center" :to="`/ajouter_favori/${id}`">
                <b-icon-heart-fill class="text-warning"></b-icon-heart-fill>
            </router-link>
        </div>
        <div class="card-body text-center py-4">
            <h5 class="card-title py-2">{{ name }}</h5>
            <router-link class="btn border-2 rounded-0 font-weight-bold btn-outline-dark" :to="`/recette/${id}`">Voir</router-link>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: "MostPopularRecipe",
        props: [ 'id', 'name', 'thumbnail' ],
        methods: {

          /**
            * Sets the height of the thumbnail (n% of the current width)
            */
          setThumbnailHeight(n) {
            let cardThumbnails = this.$el.querySelectorAll('.card-thumbnail');

            cardThumbnails.forEach(function(cardThumbnail) {
                cardThumbnail.style.height = cardThumbnail.offsetWidth * n +"px";
            });
          }

        },

        mounted(){
          this.setThumbnailHeight(0.6); // 60%
        },
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