<template>
  <div class="row">
    <div class="col-11 mx-auto">
      <form
        class="d-flex flex-column"
        action="https://vuejs.org/"
        method="post"
      >
        <label class="form-label" for="login">Login :</label>
        <input class="form-control" type="text" name="login" />
        <label class="form-label" for="login">Password :</label>
        <input class="form-control" type="password" name="password" />
        <input class="btn btn-primary" type="submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>

 label {
   margin-top: 15px;
 }

 input[type="submit"] {
   margin-top: 30px;
 }

</style>
