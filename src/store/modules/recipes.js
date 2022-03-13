import axios from "axios";
import router from '@/router';

const recipes = {
    namespaced: true,
    state: {
        recipes: null,
        recipe: null
    },
	mutations: {
        SET_RECIPES(state, data) {
            state.recipes = data
        },

        SET_RECIPE(state, data) {
            state.recipe = data
        },
    },
	actions: {
        /**
         * Loads all recipes from the database
         * using 'getRecettes' method
         */
        loadRecipes({commit}) {
            axios.get('http://localhost:5000/getRecettes')
            .then(res => {
                commit('SET_RECIPES', res.data)
            })
            .catch(error => console.log(error))
        },

        /**
         * Loads a recipe from the database
         * using 'getRecette/:id' method (:id is defined in the url)
         */
        loadRecipe({commit}) {
            axios.get('http://localhost:5000/getRecette/'+router.currentRoute.params.id)
            .then(res => {
                commit('SET_RECIPE', res.data)
            })
            .catch(error => console.log(error))
        },

        /**
         * Add a recipe to the database
         * using 'postRecette' method
         */
        addRecipe() {
            axios.post('http://localhost:5000/postRecette')
            .then(res => {
                console.log(res.data);
            })
            .catch(error => console.log(error))

        },
    }
}

export default recipes;