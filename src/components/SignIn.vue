<template>
  <div class="container-fluid">
    <div class="row pb-5">
      <div class="col d-flex justify-content-center align-items-center">
        <form class="d-flex flex-column w-75" action="https://vuejs.org/" method="post">
          <label class="form-label" for="login">Nom :</label>
          <input class="form-control rounded py-4 border-0 bg-grey" placeholder="ex : John Doe" type="text"
            name="login" />

          <label class="form-label mt-3" for="email">Email :</label>
          <input class="form-control rounded py-4 border-0 bg-grey" placeholder="ex : john.doe@gmail.com" type="mail"
            name="email" />

          <label class="form-label mt-3" for="password">Mot de passe :</label>
          <input class="form-control rounded py-4 border-0 bg-grey" type="password" name="password" />

          <label class="form-label mt-3" for="login">Répéter le mot de passe :</label>
          <input class="form-control rounded py-4 border-0 bg-grey" type="password" name="password-repeat" />

          <input class="btn btn-astra rounded-pill py-2 my-4" type="submit" />

          <small>
            Déjà un compte ? <router-link to="/connexion">Connectez-vous !</router-link>
          </small>
        </form>
      </div>
      <div class="d-none d-md-block col-4 py-5 rounded-rounder-left"
        :style="{'background-image': 'url('+ getImageUrl('sign_in_background.jpg') +')'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SignIn",
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