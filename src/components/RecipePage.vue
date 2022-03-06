<template>
  <div class="container">

    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col">
            <h1>Cassoulet à ma façon</h1>
            <router-link class="btn btn-like shadow" :to="`/ajouter_favori/`">
              <b-icon-heart-fill class="text-astra"></b-icon-heart-fill>
              <i class="ml-2">65 j'aimes</i>
            </router-link>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <i class="text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione fugit facilis assumenda
              asperiores laborum repudiandae a impedit voluptate numquam neque, dolore voluptatibus,
              expedita quidem veritatis quaerat illo ab cum beatae!
            </i>
          </div>
        </div>
      </div>


      <div class="col">
        <b-img class="img-fluid rounded-rounder" :src="getImageUrl('cassoulet.webp')"></b-img>
      </div>
    </div>

    <div class="row my-5">

      <div class="col-8">
        <div class="stepper d-flex flex-column mx-2">
          <div class="d-flex">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 bg-astra">1</div>
              <div class="line h-100"></div>
            </div>
            <div>
              <h5 class="mt-2">Etape 1</h5>
              <p class="lead text-muted pb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut omnis, id facilis tempore
                possimus repudiandae ex necessitatibus aut soluta sit repellat facere delectus consequatur 
                ratione nostrum. Facilis vel voluptatem sapiente!
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 bg-astra">2</div>
              <div class="line h-100"></div>
            </div>
            <div>
              <h5 class="mt-2">Etape 2</h5>
              <p class="lead text-muted pb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut omnis, id facilis tempore
                possimus repudiandae ex necessitatibus aut soluta sit repellat facere delectus consequatur 
                ratione nostrum. Facilis vel voluptatem sapiente!
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 bg-astra">3</div>
              <div class="line h-100"></div>
            </div>
            <div>
              <h5 class="mt-2">Etape 3</h5>
              <p class="lead text-muted pb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut omnis, id facilis tempore
                possimus repudiandae ex necessitatibus aut soluta sit repellat facere delectus consequatur 
                ratione nostrum. Facilis vel voluptatem sapiente!
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 bg-astra">4</div>
              <div class="line h-100"></div>
            </div>
            <div>
              <h5 class="mt-2">Etape 4</h5>
              <p class="lead text-muted pb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut omnis, id facilis tempore
                possimus repudiandae ex necessitatibus aut soluta sit repellat facere delectus consequatur 
                ratione nostrum. Facilis vel voluptatem sapiente!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col h-100 rounded-rounder bg-astra p-3">
        <h5>Informations</h5>
        <ul class="list-unstyled pl-3">
          <li>
            <b-icon-people></b-icon-people>
            <label class="px-2">Quantité :</label>
            <b>1 personne</b>
          </li>
          <li>
            <b-icon-clock></b-icon-clock>
            <label class="px-2">Temps :</label>
            <b>20 minutes</b>
          </li>
          <li>
            <b-icon-info-circle></b-icon-info-circle>
            <label class="px-2">Niveau : </label>
            <b>Expert</b>
          </li>
        </ul>
        
        <h5>Ingrédients</h5>
        <ul>
          <li>
            Patates <small class="text-secondary">200g</small>
          </li>
          <li>
            carottes <small class="text-secondary">75g</small>
          </li>
          <li>
            Eau <small class="text-secondary">100ml</small>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>
  
<script>
  export default {
    name: "RecipePage",
    mounted(){
      this.setThumbnailHeight(1); // 100%
    },
  };
</script>
  
<style scoped>


  .line {
    width: 2px;
    background-color: var(--grey);
  }

  .lead {
    font-size: 1.1rem;
  }

</style>