<template>
	<div class="col-8">
    <h2>Pr&eacute;paration</h2>
    <p class="lead">
      {{ preparation }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "Preparation",
    props: [ 'preparation', ],
  };
</script>

<style scoped>

  .lead {
    font-size: 1.1rem;
  }

</style>