// Importing bootstrap (including icons)
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import App from "@/App.vue";
import functions from "@/functions/index";
import router from "@/router";
import store from './store'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  functions,
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");