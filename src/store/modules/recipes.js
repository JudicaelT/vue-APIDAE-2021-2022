import axios from "axios";
import router from "@/router";
import { API_URL, authHeader } from "../api-infos";

const recipes = {
  namespaced: true,
  state: {
    recipes: null,
    recipe: null,
    mostPopularRecipes: null,
    randomRecipe: null
  },
  mutations: {
    SET_RECIPES(state, data) {
      state.recipes = data;
    },

    SET_RECIPE(state, data) {
      state.recipe = data;
    },

    SET_MOST_POPULAR_RECIPES(state, data) {
      state.mostPopularRecipes = data;
    },

    SET_RANDOM_RECIPE(state, data) {
      state.randomRecipe = data;
    }
  },
  actions: {
    /**
     * Loads all recipes from the database
     * using 'getRecettes' method
     */
    loadRecipes({ commit }) {
      axios
        .get(API_URL + "getRecettes", { headers: authHeader() })
        .then((res) => {
          commit("SET_RECIPES", res.data);
        })
        .catch((error) => console.log(error));
    },

    /**
     * Loads a recipe from the database
     * using 'getRecette/:id' method (:id is defined in the url)
     */
    loadRecipe({ commit }) {
      axios
        .get(API_URL + "getRecette/" + router.currentRoute.params.id, {
          headers: authHeader()
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
    loadMostPopularRecipes({ commit }) {
      axios
        .get(API_URL + "getRecettesByPopularity", { headers: authHeader() })
        .then((res) => {
          res.data.splice(3);
          commit("SET_MOST_POPULAR_RECIPES", res.data);
        })
        .catch((error) => console.log(error));
    },

    /**
     * Loads a random recipe from the database and sets it as the recipe
     * of the day (for this user only). We use 'localStorage' to store
     * the recipe (as a string) on the user's machine. We do the same thing
     * to store the current date. If the date on the user's machine differs
     * from the current date, we fetch another random recipe and set it as
     * the new recipe of the day.
     */
    loadDailyRecipe({ commit }) {
      let currentDate = new Date().toLocaleDateString("fr");

      if (currentDate != localStorage.getItem("lastChecked")) {
        axios
          .get(API_URL + "getRecetteRandom", { headers: authHeader() })
          .then((res) => {
            commit("SET_RANDOM_RECIPE", res.data);

            localStorage.setItem("recipeOfTheDay", JSON.stringify(res.data));
            localStorage.setItem("lastChecked", currentDate.toString());
          })
          .catch((error) => console.log(error));
      } else {
        commit(
          "SET_RANDOM_RECIPE",
          JSON.parse(localStorage.getItem("recipeOfTheDay"))
        );
      }
    },

    /**
     * Add a recipe to the database
     * using 'postRecette' method from the API
     */
    addRecipe() {
      axios
        .post(API_URL + "postRecette", { headers: authHeader() })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    },

    /**
     * Delete a recipe from the database
     * using 'deleteRecette/:id' method from the API (:id is passed to the url)
     */
    removeRecipe() {
      axios
        .get(API_URL + "deleteRecette/" + router.currentRoute.params.id, {
          headers: authHeader()
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  }
};

export default recipes;
