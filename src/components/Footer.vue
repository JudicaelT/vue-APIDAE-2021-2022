<template>
  <footer>
    <small>
      <span>Judicaël Terrisse & Joachim Da Silva</span><br />
      <strong> &copy; Copyright 2022</strong>
    </small>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  margin-top: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: var(--grey);
  background-color: var(--yale-active);
}

footer strong {
  color: var(--astra);
}
</style>
