<template>
<Navbar/>

  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import(/*webpackChunkName:"Navbar"*/'./modules/shared/pages/Navbar.vue'))
   // De esta forma se carga el componente Navbar de forma asincrona
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
