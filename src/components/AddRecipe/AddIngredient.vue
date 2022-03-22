<template>
	<div v-on:change="sendData">
		<h2 class="mt-5">Ingr&eacute;dients :</h2>
		<div class="recipe-lines">
			<div class="row" v-for="(ingredient, key) in ingredients" :id="ingredient.id" :key="key">
				<div class="col-md-6">
					<div>
						<label class="form-label mt-3" for="ingredientName">
							<b-icon-x-circle v-on:click="removeIngredient(key)" class="text-danger cursor-pointer">
							</b-icon-x-circle> Nom :
						</label>
						<input class="form-control rounded py-4 border-0 bg-grey" type="text" required
							v-model="ingredient.text" />
					</div>
				</div>

				<div class="col-md-3">
					<div>
						<label class="form-label mt-3" for="ingredientQuantity">Quantit&eacute; :</label>
						<input class="form-control rounded py-4 border-0 bg-grey" type="number" required
							v-model="ingredient.qte" />
					</div>
				</div>

				<div class="col-md-3">
					<div>
						<label class="form-label mt-3" for="quantityType">Type :</label>
						<input class="form-control rounded py-4 border-0 bg-grey" type="text" required
							v-model="ingredient.typeQte" placeholder="ex : kg" />
					</div>
				</div>
			</div>
		</div>
		<div class="btn btn-outline-dark rounded py-2 my-4 w-100" v-on:click="addIngredient()">
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
				ingredients: [
					{
						text: '',
						qte: '',
						typeQte: '',
					}
				],
			}
		},
		methods: {

			/**
			 * Creates a section with inputs fields to add an ingredient.
			 */
			addIngredient: function () {
				this.ingredients.push(
					{
						text: '',
						qte: '',
						typeQte: '',
					}
				);
			},

			/**
			 * Remove a section to add an ingredient. The section will
			 * not be removed if it is the only section in the form
			 * (so that the recipe has at least 1 ingredient)
			 * 
			 * @param index the position of the element in ingredients[]
			 */
			removeIngredient: function (index) {
				if (this.ingredients.length <= 1) {
					alert("La recette doit avoir au moins 1 ingrédient");
					return;
				}

				this.ingredients.splice(index, 1);
			},

			sendData: function () {
				this.$emit(
					'setIngredients',
					this.ingredients,
				);
			},

		}
	};
</script>