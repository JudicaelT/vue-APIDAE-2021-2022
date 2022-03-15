<template>
  <div class="container-fluid">
    <div class="row pb-5">
      <div class="col d-flex justify-content-center align-items-center">
        <form
          class="d-flex flex-column w-75"
          @submit.prevent="handleRegister"
          method="post"
        >
          <p v-if="message" class="alert alert-danger">
            {{ message }}
          </p>
          <label class="form-label" for="login">Nom d'utilisateur :</label>
          <input
            class="form-control rounded py-4 border-0 bg-grey"
            placeholder="ex : John Doe"
            type="text"
            v-model="user.username"
            name="login"
          />

          <label class="form-label mt-3" for="password">Mot de passe :</label>
          <input
            class="form-control rounded py-4 border-0 bg-grey"
            type="password"
            name="password"
            v-model="user.password"
          />

          <label class="form-label mt-3" for="login"
            >Répéter le mot de passe :</label
          >
          <input
            class="form-control rounded py-4 border-0 bg-grey"
            type="password"
            name="password-repeat"
            v-model="confirmpassword"
          />

          <input class="btn btn-astra rounded-pill py-2 my-4" type="submit" />

          <small>
            Déjà un compte ?
            <router-link to="/connexion">Connectez-vous !</router-link>
          </small>
        </form>
      </div>
      <div
        class="d-none d-md-block col-4 py-5 rounded-rounder-left"
        :style="{
          'background-image': backgroundImage,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import User from "../models/user";
export default {
  name: "SignIn",
  data() {
    return {
      backgroundImage: `url(${require("@/assets/img/sign_in_background.jpg")})`,
      user: new User("", ""),
      confirmpassword: "",
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    handleRegister() {
      if (this.user.username.length <= 4) {
        this.message = "Veuillez inscrire un nom d'utilisateur (+4 caractères)";
        return;
      }
      if (this.user.password.length <= 6) {
        this.message =
          "Veuillez inscrire un mot de passe a plus de 6 caractères";
        return;
      }
      if (this.user.password !== this.confirmpassword) {
        this.message = "Les mots de passes sont différents";
        return;
      }
      this.$store.dispatch("auth/register", this.user).then(
        () => {
          this.$router.push("/connexion");
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style scoped>
.col {
  min-height: calc(100vh - 64px);
}

div[style] {
  background-position: center;
  background-repeat: no-repeat;
}
</style>