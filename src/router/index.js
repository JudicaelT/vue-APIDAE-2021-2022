import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: "Accueil",
      component: Home,
      path: "/"
    },
    {
      name: "Recettes",
      component: Home,
      path: "/recettes"
    },
    {
      name: "Connexion",
      component: Login,
      path: "/login"
    }
  ]
});

export default router;
