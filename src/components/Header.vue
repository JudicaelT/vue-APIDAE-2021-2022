<template>
  <header class="d-flex py-3 justify-content-between align-items-center">
    <div class="container">
      <div class="row">

        <div class="col justify-content-between">
          <b-navbar toggleable="lg">

            <h2 class="m-0">Cookclico</h2>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="mx-auto">
                <b-nav-item>
                  <router-link class="nav-item nav-link active" to="/">Accueil</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="nav-item nav-link" to="recettes">Recettes</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="nav-item nav-link d-lg-none" to="/login">Connexion</router-link>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>

            <router-link class="btn btn-astra rounded-pill d-none d-lg-block" to="/login">Connexion</router-link>
          </b-navbar>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
  
  .navbar-light .navbar-nav .nav-link {
    color: var(--yale);
  }

  .navbar-light .navbar-nav .nav-link.active,
  .navbar-light .navbar-nav .nav-link:hover {
    color: var(--yale-active);
  }

  .navbar-light .navbar-toggler {
    border-color: var(--yale);
  }

</style>
