<template>
	<div class="container">
		<div class="row">
			<div class="col d-flex justify-content-center align-items-center">
				<form class="d-flex flex-column w-100" action="https://vuejs.org/" method="post">
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

					<h2 class="mt-5">Ingr&eacute;dients :</h2>
					<div class="recipe-lines">
						<div class="row" id="recipe">
							<div class="col-md-6">
								<div>
									<label class="form-label mt-3" for="ingredientName">Nom :</label>
									<input class="form-control rounded py-4 border-0 bg-grey" type="text" name="ingredientName" />
								</div>
							</div>

							<div class="col-md-3">
								<div>
									<label class="form-label mt-3" for="ingredientQuantity">Quantit&eacute; :</label>
									<input class="form-control rounded py-4 border-0 bg-grey" type="number" name="ingredientQuantity" />
								</div>
							</div>

							<div class="col-md-3">
								<div>
									<label class="form-label mt-3" for="quantityType">Type :</label>
									<input class="form-control rounded py-4 border-0 bg-grey" type="text"
										placeholder="ex : kg, verre, ..." name="quantityType" />
								</div>
							</div>
						</div>

						<div class="row" id="recipe-2">
							<div class="col">
								<div>
									<label class="form-label mt-3" for="ingredientName">
										<b-icon-x-circle v-on:click="removeIngredient(2)" class="text-danger cursor-pointer">
										</b-icon-x-circle> Nom :
									</label>
									<input class="form-control rounded py-4 border-0 bg-grey" type="text" name="ingredientName" />
								</div>
							</div>

							<div class="col-md-3">
								<div>
									<label class="form-label mt-3" for="ingredientQuantity">Quantit&eacute; :</label>
									<input class="form-control rounded py-4 border-0 bg-grey" type="number" name="ingredientQuantity" />
								</div>
							</div>

							<div class="col-md-3">
								<div>
									<label class="form-label mt-3" for="quantityType">Type :</label>
									<input class="form-control rounded py-4 border-0 bg-grey" type="text"
										placeholder="ex : kg, verre, ..." name="quantityType" />
								</div>
							</div>
						</div>
					</div>
					<div class="btn btn-outline-dark rounded py-2 my-4" v-on:click="addIngredient()">
						<b-icon-plus-circle></b-icon-plus-circle>
						Ajouter un autre ingrédient
					</div>
					<input class="btn btn-astra rounded-pill py-2 mt-4 mb-5 w-100" type="submit" />
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AddRecipe",
		data: function () {
			return {
				count: 0,
			}
		},
		methods: {

			addIngredient: function () {
				let id = this.count++;

				let newIngredient = document.getElementById('recipe').cloneNode(true);
				
				newIngredient.id = 'recipe-' + id;
				newIngredient.querySelector('label[for="ingredientName"]').innerHTML = '<b-icon-x-circle v-on:click="removeIngredient(' + id + ')" class="text-danger cursor-pointer"></b-icon-x-circle> Nom :';

			},

			removeIngredient: function (id) {
				document.getElementById('recipe-' + id).remove();
			},

			addRecipe: function () {
				this.$store.dispatch('recipes/postRecipe');
			}
		}

	};
</script>

<style scoped>
</style>