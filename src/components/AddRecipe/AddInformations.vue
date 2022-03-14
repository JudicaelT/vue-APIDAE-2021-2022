<template>
	<div>
		<h2 class="mt-3">Informations :</h2>

		<label class="form-label mt-3" for="name">Nom :</label>
		<input class="form-control rounded py-4 border-0 bg-grey" type="text" name="name" />

		<label class="form-label mt-3" for="description">Description :</label>
		<textarea class="form-control rounded py-4 border-0 bg-grey" name="description"></textarea>

		<label class="form-label mt-3" for="quantity">Quantit&eacute; :</label>
		<input class="form-control rounded py-4 border-0 bg-grey" type="number" name="quantity" />

		<label class="form-label mt-3" for="time">Temps de pr&eacute;paration (minutes) :</label>
		<input class="form-control rounded py-4 border-0 bg-grey" type="number" name="time" />

		<label class="form-label mt-3" for="level">Niveau :</label>
		<input class="form-control rounded py-4 border-0 bg-grey" type="text" name="level" />

		<label class="form-label mt-3" for="preparation">Preparation :</label>
		<textarea class="form-control rounded py-4 border-0 bg-grey" name="preparation"></textarea>
	</div>
</template>
<script>
	export default {
		name: "AddInformations",
	};
</script>