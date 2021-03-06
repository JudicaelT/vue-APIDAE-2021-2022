import Vue from 'vue';
import Vuex from 'vuex';
import recipes from './modules/recipes';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		recipes,
		auth
	},
});

export default store;