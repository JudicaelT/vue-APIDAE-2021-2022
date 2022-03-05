<template>
  <div class="container-fluid">
    <div class="row pb-5">
      <div class="d-none d-md-block col-4 py-5 rounded-rounder-right" :style="{'background-image': 'url('+ getImageUrl('login_background.jpg') +')'}"></div>
      <div class="col d-flex flex-column justify-content-center align-items-center">
        <form
          class="d-flex flex-column w-75"
          action="https://vuejs.org/"
          method="post"
        >
          <label class="form-label" for="login">Nom :</label>
          <input class="form-control rounded py-4 border-0 bg-grey" placeholder="ex : John Doe" type="text" name="login" />
          <label class="form-label mt-3" for="password">Mot de passe :</label>
          <input class="form-control rounded py-4 border-0 bg-grey" type="password" name="password" />
          <input class="btn btn-astra rounded-pill py-2 my-4" type="submit" />
          <small>
            Pas de compte ? <router-link to="/inscription">Insrivez-vous !</router-link>
          </small>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
