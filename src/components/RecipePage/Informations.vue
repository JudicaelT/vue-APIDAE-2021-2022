<template>
	<div class="col h-100 rounded-rounder bg-astra p-3">
    <h5>Informations</h5>
    <ul class="list-unstyled pl-3">
      <li>
        <b-icon-people></b-icon-people>
        <label class="px-2">Quantité :</label>
        <b>{{informations.quantity}} personnes</b>
      </li>
      <li>
        <b-icon-clock></b-icon-clock>
        <label class="px-2">Temps :</label>
        <b>{{informations.time}} minutes</b>
      </li>
      <li>
        <b-icon-info-circle></b-icon-info-circle>
        <label class="px-2">Niveau : </label>
        <b>{{informations.level}}</b>
      </li>
    </ul>
    
    <h5>Ingrédients</h5>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.key">
        {{ ingredient.name }} <small class="text-secondary">{{ ingredient.quantity }} {{ ingredient.typeQuantity }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Informations",
    props: [ 'informations', 'ingredients', ],
  };
</script>