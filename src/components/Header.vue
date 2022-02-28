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
                  <router-link class="nav-item nav-link active" to="/">Poster une recette</router-link>
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

  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img
          :src="getImageUrl('logo.png')"
          alt=""
          width="50"
          height="50"
          class="d-inline-block align-text-top mr-2"
        />
        Cookclico
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link
            to="/"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
            custom
          >
            <li class="nav-item">
              <a
                :href="href"
                @click="navigate"
                :class="[
                  'nav-link',
                  isActive && 'router-link-active',
                  isExactActive && 'router-link-exact-active active',
                ]"
                >{{ route.name }}</a
              >
            </li>
          </router-link>
          <router-link
            to="/recettes"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
            custom
          >
            <li class="nav-item">
              <a
                :href="href"
                @click="navigate"
                :class="[
                  'nav-link',
                  isActive && 'router-link-active',
                  isExactActive && 'router-link-exact-active active',
                ]"
                >{{ route.name }}</a
              >
            </li>
          </router-link>
        </ul>
        <div class="d-flex">
          <router-link to="/Login" v-slot="{ href, route, navigate }" custom>
            <button class="btn btn-warning" :href="href" @click="navigate">
              {{ route.name }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav> -->
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

</style>
