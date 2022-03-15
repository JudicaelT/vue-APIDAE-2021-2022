import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import SignIn from "@/components/SignIn";
import RecipePage from "@/components/RecipePage";
import AddRecipe from "@/components/AddRecipe";

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
    },
    {
      name: "Ajout_Recette",
      component: AddRecipe,
      path: "/ajouter_recette"
    }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/connexion", "/inscription"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/connexion");
  } else {
    next();
  }
});

export default router;
