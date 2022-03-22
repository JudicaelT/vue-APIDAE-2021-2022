<template>
  <div v-on:change="sendData">
    <h2 class="mt-3">Informations :</h2>

    <label class="form-label mt-3" for="name">Nom :</label>
    <input class="form-control rounded py-4 border-0 bg-grey" type="text" required v-model="name" />

    <label class="form-label mt-3" for="description">Description :</label>
    <textarea class="form-control rounded py-4 border-0 bg-grey" required v-model="description"></textarea>

    <label class="form-label mt-3" for="quantity">Nombre de personne :</label>
    <input class="form-control rounded py-4 border-0 bg-grey" type="number" required v-model="quantity" />

    <label class="form-label mt-3" for="time">Temps de pr&eacute;paration (minutes) :</label>
    <input class="form-control rounded py-4 border-0 bg-grey" type="number" required v-model="time" />

    <label class="form-label mt-3" for="level">Niveau :</label>
    <input class="form-control rounded py-4 border-0 bg-grey" type="text" required v-model="level" />

    <label class="form-label mt-3" for="preparation">Preparation :</label>
    <textarea class="form-control rounded py-4 border-0 bg-grey" required v-model="preparation"></textarea>

    <input type="file" class="py-2 mt-4" accept="image/*" required @change="onFilePicked"/>
  </div>
</template>
<script>
  export default {
    name: "AddInformations",

    data() {
      return {
        name: '',
        description: '',
        quantity: '',
        time: '',
        level: '',
        preparation: '',
        thumbnail: '',
      }
    },

    methods: {

      onFilePicked: async function (event) {
        let file = event.target.files;
        let imgBase64 = await this.convertBase64(file[0]);
        
        this.thumbnail = imgBase64;
        this.sendData();
      },


      convertBase64: function (file) {
        return new Promise((res) => {
          let fileReader = new FileReader();
          fileReader.readAsDataURL(file);

          fileReader.onload = () => {
            res(fileReader.result);
          }
        })
      },


      sendData: function () {
        this.$emit(
                  'setInformations',
                  this.name,
                  this.description,
                  this.quantity,
                  this.time,
                  this.level,
                  this.preparation,
                  this.thumbnail,
                  );
      },

    }
  };
</script>