<template>
  <div id="header">
    <router-link to="/">Accueil</router-link>
    <router-link to="recettes">Recettes</router-link>
    <router-link to="login">Connexion</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
#header {
  min-height: 80px;
}
</style>
