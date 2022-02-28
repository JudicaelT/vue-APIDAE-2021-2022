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
  --pink: #fc9a81;
  --salmon: #f5c0b2;
  --yale: #0d3f79;
  --astra: #f0ddac;
  --grey: #ededed;

  --yale-active: #0a305c;
  --astra-active: #eed491;
}

/*
 * Adding every variation of roboto Roboto
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
  /* Again, we use display flex for the sticky footer*/
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

.bg-pink {
  background-color: var(--pink);
}

.bg-salmon {
  background-color: var(--salmon);
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

.btn-astra {
  color: #000;
  background-color: var(--astra);
  border-color: var(--astra);
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
</style>
