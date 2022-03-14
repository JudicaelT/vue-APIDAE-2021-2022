import axios from "axios";
import router from "@/router";

const API_URL = "https://dsv-api-recipe.herokuapp.com/";
const recipes = {
    namespaced: true,
    state: {
        recipes: null,
        recipe: null,
        mostPopularRecipes: null,
    },
    mutations: {
        SET_RECIPES(state, data) {
            state.recipes = data
        },

        SET_RECIPE(state, data) {
            state.recipe = data
        },

        SET_MOST_POPULAR_RECIPES(state, data) {
            state.mostPopularRecipes = data
        }
    },

    actions: {
        /**
         * Loads all recipes from the database
         * using 'getRecettes' method
         */
        loadRecipes({ commit }, token) {
            axios
                .get(API_URL + "getRecettes", {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                .then((res) => {
                    commit("SET_RECIPES", res.data);
                })
                .catch((error) => console.log(error));
        },

        /**
         * Loads a recipe from the database
         * using 'getRecette/:id' method (:id is defined in the url)
         */
        loadRecipe({ commit }, token) {
            axios
                .get(API_URL + "getRecette/" + router.currentRoute.params.id, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                .then((res) => {
                    commit("SET_RECIPE", res.data);
                })
                .catch((error) => console.log(error));
        },



        /**
         * Loads the 3 most popular recipes from the database
         * using 'getRecettesByPopularity' method from the API
         */
        loadMostPopularRecipes({ commit }, token) {
            axios
                .get(API_URL + 'getRecettesByPopularity', {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                .then(res => {
                    res.data.splice(3);
                    commit('SET_MOST_POPULAR_RECIPES', res.data);
                })
                .catch(error => console.log(error))
        },

        /**
         * Add a recipe to the database
         * using 'postRecette' method
         */
        addRecipe() {
            axios
                .post(API_URL + 'postRecette')
                .then((res) => {
                    console.log(res.data);
                })
                .catch((error) => console.log(error));
        }
    }
};

export default recipes;
