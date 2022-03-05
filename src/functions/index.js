//This file is where we put our global methods

import Vue from "vue";

Vue.mixin({
    methods: {

        /**
        * Fetches an image on the server
        * 
        * @param {String} name -> name of the image (with its extention)
        * @returns {String} -> resolved path of the image
        */
        getImageUrl(name) {
            return require(`@/assets/img/${name}`);
        }
        
    }
});