<template>
  <header class="d-flex py-3 justify-content-between align-items-center">
    <div class="container">
      <div class="row">
        <div class="col justify-content-between">
          <b-navbar toggleable="lg">
            <router-link class="nav-item nav-link active" to="/">
              <h2 class="m-0">Cookclico</h2>
            </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="mx-auto">
                <b-nav-item v-if="currentUser">
                  <router-link class="nav-item nav-link active" to="/"
                    >Accueil</router-link
                  >
                </b-nav-item>
                <b-nav-item v-if="currentUser">
                  <router-link
                    class="nav-item nav-link active"
                    to="/ajouter_recette"
                    >Ajouter une recette</router-link
                  >
                </b-nav-item>
                <b-nav-item v-if="!currentUser">
                  <router-link
                    class="nav-item btn btn-astra rounded-pill d-lg-none"
                    to="/connexion"
                    >Connexion</router-link
                  >
                </b-nav-item>
                <b-nav-item v-if="!currentUser">
                  <router-link
                    class="nav-item btn btn-astra rounded-pill d-lg-none"
                    to="/inscription"
                    >Inscription</router-link
                  >
                </b-nav-item>
                <b-nav-item v-else>
                  <div
                    class="nav-item btn btn-astra rounded-pill d-lg-none"
                    @click.prevent="logOut"
                  >
                    Déconnexion
                  </div>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
            <router-link
              v-if="!currentUser"
              class="btn btn-astra rounded-pill d-none d-lg-block mr-3"
              to="/connexion"
              >Connexion</router-link
            >
            <router-link
              v-if="!currentUser"
              class="btn btn-astra rounded-pill d-none d-lg-block"
              to="/inscription"
              >Inscription</router-link
            >
            <div
              v-else
              class="btn btn-astra rounded-pill d-none d-lg-block"
              @click.prevent="logOut"
            >
              Déconnexion
            </div>
          </b-navbar>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/connexion");
    },
  },
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}

.navbar-light .navbar-nav .nav-link {
  color: var(--yale);
}

.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link:hover {
  color: var(--yale-active);
}
</style>