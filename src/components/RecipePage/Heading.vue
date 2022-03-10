<template>
	<div class="row">
    <div class="col-8">
      <div class="row">
        <div class="col">
          <h1>{{ name }}</h1>
          <router-link class="btn btn-like shadow" :to="`/ajouter_favori/${id}`">
            <b-icon-heart-fill class="text-astra"></b-icon-heart-fill>
            <i class="ml-2">{{ nbLike }} j'aimes</i>
          </router-link>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <i class="text-secondary">
            {{ description }}
          </i>
        </div>
      </div>
    </div>
		<div class="col">
			<b-img class="img-fluid rounded-rounder" :src="getImageUrl( `${thumbnail}` )"></b-img>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Heading",
    props: [ 'id', 'name', 'thumbnail', 'nbLike', 'description', ],
  };
</script>

<style scoped></style>