<template>
  <div>
    <h2 class="mt-3">Informations :</h2>

    <label class="form-label mt-3" for="name">Nom :</label>
    <input
      class="form-control rounded py-4 border-0 bg-grey"
      type="text"
    />

    <label class="form-label mt-3" for="description">Description :</label>
    <textarea
      class="form-control rounded py-4 border-0 bg-grey"
    ></textarea>

    <label class="form-label mt-3" for="quantity">Nombre de personne :</label>
    <input
      class="form-control rounded py-4 border-0 bg-grey"
      type="number"
    />

    <label class="form-label mt-3" for="time"
      >Temps de pr&eacute;paration (minutes) :</label
    >
    <input
      class="form-control rounded py-4 border-0 bg-grey"
      type="number"
    />

    <label class="form-label mt-3" for="level">Niveau :</label>
    <input
      class="form-control rounded py-4 border-0 bg-grey"
      type="text"
    />

    <label class="form-label mt-3" for="preparation">Preparation :</label>
    <textarea
      class="form-control rounded py-4 border-0 bg-grey"
    >
    </textarea>
  </div>
</template>
<script>
export default {
  name: "AddInformations",
};
</script>