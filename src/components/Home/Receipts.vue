<template>
    <div class="row my-5">
        <Receipt
        v-for="(receipt, key) in receipts"
            :id="receipt.id" :name="receipt.name"
            :thumbnail="receipt.thumbnail"
            :quantity="receipt.quantity"
            :time="receipt.time"
            :level="receipt.level"
            :key="key">
        </Receipt>
    </div>
</template>
  
<script>
    import Receipt from "@/components/Home/Receipt";

    export default {
      name: "Receipts",
      components: {
        Receipt,
      },
      data () {
        return {
          receipts: [
            {
              id: 1,
              name: 'Recette1',
              thumbnail: 'ghibli1.jpeg',
              quantity: 5,
              time: 20,
              level: 'amateur',
            },
            {
              id: 2,
              name: 'Recette2',
              thumbnail: 'fried_chicken.png',
              quantity: 7,
              time: 15,
              level: 'débutant',
            },
            {
              id: 3,
              name: 'Recette3',
              thumbnail: 'japanese_food.png',
              quantity: 2,
              time: 25,
              level: 'expert',
            },
          ]
        }
      }
    };
</script>
  
<style scoped>
</style>