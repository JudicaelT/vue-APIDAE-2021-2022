<template>
	<div class="container">
		<div class="row">
			<div class="col d-flex justify-content-center align-items-center">
				<form class="d-flex flex-column w-100" action="https://vuejs.org/" method="post">

					<AddInformations></AddInformations>
					<AddIngredient></AddIngredient>
					
					<input class="btn btn-astra rounded-pill py-2 mt-4 mb-5 w-100" type="submit" />
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import AddInformations from '@/components/AddRecipe/AddInformations';
	import AddIngredient from '@/components/AddRecipe/AddIngredient';

	export default {
		name: "AddRecipe",

		components: {
			AddInformations,
			AddIngredient,
		},

		methods: {
			addRecipe: function () {
				this.$store.dispatch('recipes/postRecipe');
			}
		}

	};
</script>