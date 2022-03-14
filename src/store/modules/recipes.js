import axios from "axios";
import router from "@/router";
import store from "@/store";

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
            Authorization: "Bearer " + store.state.auth?.user?.tokenJWT
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
            Authorization: "Bearer " + store.state.auth?.user?.tokenJWT
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
        loadMostPopularRecipes({commit}) {
            axios.get('http://localhost:5000/getRecettesByPopularity')
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
        .post("http://localhost:5000/postRecette")
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  }
};

export default recipes;
