<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
}

</script>

<style>

/*
 * Defining variables for reccuring values
 */
:root {
  --like: #f53954;
  --yale: #0d3f79;
  --astra: #f0ddac;
  --grey: #eaeae6;

  --like-active: #f11536;
  --yale-active: #0a305c;
  --astra-active: #eed491;
}

/*
 * Adding Roboto font
 */
@font-face {
  font-family: "Roboto";
  font-weight: 400;
  src: local("Roboto"), url("assets/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-weight: 500;
  src: local("Roboto"), url("assets/fonts/Roboto/Roboto-Bold.ttf") format("truetype");
}

/*
 * We make sure the content takes all the vertical space.
 * This is important if we want to make a sticky footer.
 */
html,
body,
#app {
  min-height: 100vh;
}

#app {
  /* Again, we use display flex for the sticky footer */
  display: flex;
  flex-direction: column;

  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*
 * Some CSS classes similar to bootstrap
 */

.bg-like {
  background-color: var(--like);
}

.bg-yale {
  background-color: var(--yale);
}

.bg-astra {
  background-color: var(--astra);
}

.bg-grey {
  background-color: var(--grey);
}

.text-yale {
  color: var(--yale);
}

.btn-yale {
  color: #fff;
  background-color: var(--yale);
  border-color: var(--yale);
}

.btn-like {
  color: #fff;
  background-color: var(--like);
  border-color: var(--like);
}

.btn-astra {
  color: #000;
  background-color: var(--astra);
  border-color: var(--astra);
}

.btn-like:hover {
  color: #fff;
  background-color: var(--like-active);
  border-color: var(--like-active);
}

.btn-yale:hover {
  color: #fff;
  background-color: var(--yale-active);
  border-color: var(--yale-active);
}

.btn-astra:hover {
  color: #000;
  background-color: var(--astra-active);
  border-color: var(--astra-active);
}

.ls-1 {
  letter-spacing: 1px;
}

.ls-2 {
  letter-spacing: 2px;
}

.ls-3 {
  letter-spacing: 3px;
}

.ls-4 {
  letter-spacing: 4px;
}

.ls-5 {
  letter-spacing: 5px;
}

.h-0 {
  height: 0%;
}

.w-33 {
  width: 33.33333%;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}

.flex-4 {
  flex: 4;
}

.flex-5 {
  flex: 5;
}

.border-1 {
  border-width: 1px;
}

.border-2 {
  border-width: 2px;
}

.border-3 {
  border-width: 3px;
}

.border-4 {
  border-width: 4px;
}

.border-5 {
  border-width: 5px;
}

.rounded-rounder {
  border-radius: 15px;
}

.rounded-rounder-left {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.rounded-rounder-right {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.thumbnail {
  min-height: 110px;
}

.card {
  border: none;
}
</style>
