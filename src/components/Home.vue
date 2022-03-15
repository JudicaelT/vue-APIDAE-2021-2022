<template>
  <div class="container">
    <MealOfTheDay></MealOfTheDay>
    <MostPopular></MostPopular>
    <Recipes></Recipes>
  </div>
</template>

<script>
import MealOfTheDay from "@/components/Home/MealOfTheDay";
import MostPopular from "@/components/Home/MostPopular";
import Recipes from "@/components/Home/Recipes";

export default {
  name: "Home",
  components: {
    MealOfTheDay,
    MostPopular,
    Recipes,
  },
};
</script>

<style scoped>
/**
   * /deep/ means child components will be affected by this style
   */
/deep/ .btn {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
