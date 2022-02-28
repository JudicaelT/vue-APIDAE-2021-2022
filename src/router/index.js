import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import SignIn from "@/components/SignIn";

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
      path: "/login"
    },
    {
      name: "Inscription",
      component: SignIn,
      path: "/signIn"
    }
  ]
});

export default router;
