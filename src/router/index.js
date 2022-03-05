import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import SignIn from "@/components/SignIn";
import RecipePage from "@/components/RecipePage";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: "Accueil",
      component: Home,
      path: "/"
    },
    {
      name: "Connexion",
      component: Login,
      path: "/connexion"
    },
    {
      name: "Inscription",
      component: SignIn,
      path: "/inscription"
    },
    {
      name: "Recette",
      component: RecipePage,
      path: "/recette/:id"
    }
  ]
});

export default router;
