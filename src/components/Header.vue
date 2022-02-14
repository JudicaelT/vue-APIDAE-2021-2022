<template>
  <header class="d-flex justify-content-between align-items-center">
    <div>
      <h2>Cookclico</h2>
    </div>
    <div>
      <router-link to="/">Accueil</router-link>
      <router-link to="recettes">Recettes</router-link>
    </div>
    <div>
      <router-link class="btn btn-primary" to="/login">Connexion</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
header {
  padding: 20px;
}
</style>
