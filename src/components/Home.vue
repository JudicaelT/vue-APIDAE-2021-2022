<template>
  <div class="container">
    <MealOfTheDay></MealOfTheDay>
    <MostPopular></MostPopular>
    <Receipts></Receipts>
  </div>
</template>

<script>
import MealOfTheDay from "@/components/Home/MealOfTheDay";
import MostPopular from "@/components/Home/MostPopular";
import Receipts from "@/components/Home/Receipts";

export default {
  name: "Home",
  components: {
    MealOfTheDay,
    MostPopular,
    Receipts,
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
