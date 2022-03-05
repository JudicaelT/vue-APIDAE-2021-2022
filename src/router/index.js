import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import SignIn from "@/components/SignIn";
import ReceiptPage from "@/components/ReceiptPage";

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
      component: ReceiptPage,
      path: "/recette/:id"
    }
  ]
});

export default router;
