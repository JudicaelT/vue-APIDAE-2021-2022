import axios from "axios";

const API_URL = "https://dsv-api-recipe.herokuapp.com/";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
const posts = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return axios
        .post(API_URL + "login", {
          login: user.username,
          password: user.password
        })
        .then(
          (response) => {
            if (response.jwt) {
              user.token = response.jwt;
              localStorage.setItem("user", JSON.stringify(user));
            }
            commit("loginSuccess", user);
            return Promise.resolve(user);
          },
          (error) => {
            commit("loginFailure");
            return Promise.reject(error);
          }
        );
    },
    logout({ commit }) {
      localStorage.removeItem("user");
      commit("logout");
    },
    register({ commit }, user) {
      console.log(user.username, user.password);
      return axios
        .post(API_URL + "register", {
          login: user.username,
          password: user.password
        })
        .then(
          (response) => {
            commit("registerSuccess");
            return Promise.resolve(response.data);
          },
          (error) => {
            return Promise.reject(error);
          }
        );
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};

export default posts;
