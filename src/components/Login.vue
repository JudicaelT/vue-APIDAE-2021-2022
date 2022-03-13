<template>
  <div class="container-fluid">
    <div class="row pb-5">
      <div
        class="d-none d-md-block col-4 py-5 rounded-rounder-right"
        :style="{
          'background-image': backgroundImage,
        }"
      ></div>
      <div
        class="col d-flex flex-column justify-content-center align-items-center"
      >
        <form
          class="d-flex flex-column w-75"
          @submit.prevent="handleLogin"
          method="post"
        >
          <label class="form-label" for="login">Nom d'utilisateur :</label>
          <input
            class="form-control rounded py-4 border-0 bg-grey"
            placeholder="ex : John Doe"
            type="text"
            name="login"
            v-model="user.username"
          />
          <label class="form-label mt-3" for="password">Mot de passe :</label>
          <input
            class="form-control rounded py-4 border-0 bg-grey"
            type="password"
            name="password"
            v-model="user.password"
          />
          <input class="btn btn-astra rounded-pill py-2 my-4" type="submit" />
          <small>
            Pas de compte ?
            <router-link to="/inscription">Insrivez-vous !</router-link>
          </small>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  name: "Login",
  data() {
    return {
      backgroundImage: `url(${require("@/assets/img/login_background.jpg")})`,
      user: new User("", ""),
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      if (this.user.username && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            console.log(error);
          }
        );
      }
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
