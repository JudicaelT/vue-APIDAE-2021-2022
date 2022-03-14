<template>
	<div>
		<h2 class="mt-5">Ingr&eacute;dients :</h2>
		<div class="recipe-lines">
			<div class="row" v-for="ingredient in ingredients" :id="ingredient.id" :key="ingredient.key">
				<div class="col-md-6">
					<div>
						<label class="form-label mt-3" for="ingredientName">
							<b-icon-x-circle v-on:click="removeIngredient(ingredient.id)" class="text-danger cursor-pointer">
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
						<input class="form-control rounded py-4 border-0 bg-grey" type="text" placeholder="ex : kg"
							name="quantityType" />
					</div>
				</div>
			</div>
		</div>
		<div class="btn btn-outline-dark rounded py-2 my-4 w-100" v-on:click="addIngredient(count)">
			<b-icon-plus-circle></b-icon-plus-circle>
			Ajouter un autre ingrédient
		</div>
	</div>
</template>
<script>
	export default {
		name: "AddIngredient",

		data: function () {
			return {
				count: 0,
				ingredients: [{
					id: 0
				}],
			}
		},
		methods: {

			/**
			 * Creates a section with inputs fields to add an ingredient.
			 * The section is created with an id so it can be removed
			 * using 'removeIngredient(id)' method
			 */
			addIngredient: function () {
				this.ingredients.push({
					id: ++this.count,
				});
			},

			/**
			 * Remove a section to add an ingredient. The section will
			 * not be removed if it is the only section in the form
			 * (so that the recipe has at least 1 ingredient)
			 * 
			 * @param id the id attribute of the section we want to remove
			 */
			removeIngredient: function (id) {
				if (this.ingredients.length <= 1) {
					alert('La recette doit avoir au moins 1 ingrédient');
					return;
				}

				let ingredientIndex = this.ingredients.findIndex(ingredient => {
					return ingredient.id === id;
				});

				console.log(ingredientIndex);
				if (ingredientIndex !== -1) {
					this.ingredients.splice(ingredientIndex, 1);
				} else {
					console.log('toto');
				}
			},
		}

	};
</script>