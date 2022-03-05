<template>
    <div class="col-sm-6 col-md-4">
        <div class="card overflow-hidden bg-astra shadow rounded-rounder">
            <div class="overflow-hidden rounded-rounder d-flex align-items-center bg-light" style="height: 150px;">
                <b-img fluid :src="getImageUrl( `${thumbnail}` )"></b-img>
            </div>
            <div class="row p-3">
                <div class="col text-truncate">
                    <h3 class="h4 m-0">{{ name }}</h3>
                    <small class="text-secondary">
                        <b-icon-people-fill></b-icon-people-fill>
                        {{ quantity }} personnes
                        <b-icon-clock-fill></b-icon-clock-fill>
                        {{ time }} minutes
                        <b-icon-info-circle-fill></b-icon-info-circle-fill>
                        {{ level }}
                    </small>
                </div>
                <div class="d-flex align-items-center px-3">
                    <router-link class="btn btn-yale rounded d-flex align-items-center shadow" :to="`/recette/${id}`">
                        <b-icon-eye class="text-light"></b-icon-eye>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
      name: "Recipe",
      props: [ 'id', 'name', 'thumbnail', 'quantity', 'time', 'level', ],
    };
</script>
  
<style scoped>
</style>