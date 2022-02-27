<template>
    <div class="row my-5">
        <div class="col-sm-6 col-md-4 mb-5">
            <div class="card bg-pink text-yale rounded-rounder px-3 h-100">
                <div class="d-flex align-items-center rounded-rounder overflow-hidden bg-light shadow mt-n4 h-50">
                    <b-img fluid :src="getImageUrl('ghibli1.jpeg')"></b-img>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center h-50">
                    <h3 class="h4">Lorem</h3>
                    <a class="btn btn-yale ls-1 rounded-pill px-4 shadow" href="#">Lire</a>
                </div>
            </div>
        </div>

        <div class="col-sm-6 col-md-4 mb-5">
            <div class="card bg-pink text-yale rounded-rounder px-3 h-100">
                <div class="d-flex align-items-center rounded-rounder overflow-hidden bg-light shadow mt-n4 h-50">
                    <b-img fluid :src="getImageUrl('fried_chicken.png')"></b-img>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center h-50">
                    <h3 class="h4">Lorem</h3>
                    <a class="btn btn-yale ls-1 rounded-pill px-4 shadow" href="#">Lire</a>
                </div>
            </div>
        </div>

        <div class="col-sm-6 col-md-4 mb-5">
            <div class="card bg-pink text-yale rounded-rounder px-3 h-100">
                <div class="d-flex align-items-center rounded-rounder overflow-hidden bg-light shadow mt-n4 h-50">
                    <b-img fluid :src="getImageUrl('japanese_food.png')"></b-img>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center h-50">
                    <h3 class="h4">Lorem</h3>
                    <a class="btn btn-yale ls-1 rounded-pill px-4 shadow" href="#">Lire</a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: "Receipts",
    };
</script>
  
<style scoped>
</style>