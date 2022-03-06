// This file is where we put our global methods

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
        },


        /**
        * Sets the height of the thumbnail (n% of the current width)
        * 
        * @param {float} n -> percentage of the current width
        */
        setThumbnailHeight(n) {
            let thumbnails = this.$el.querySelectorAll('.thumbnail');
        
            thumbnails.forEach(function(thumbnail) {
                thumbnail.style.height = thumbnail.offsetWidth * n +"px";
            });
        }
            
    }
});