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
        }
    },
	actions: {
        loadRecipes({commit}) {
            axios.get('http://localhost:5000/getRecettes')
            .then(res => {
                commit('SET_RECIPES', res.data)
            })
            .catch(error => console.log(error))
        },

        loadRecipe({commit}) {
            axios.get(`http://localhost:5000/getRecette/`+router.currentRoute.params.id)
            .then(res => {
                commit('SET_RECIPE', res.data)
            })
            .catch(error => console.log(error))
        }
    }
}

export default recipes;