<template>
    <h1>About Page</h1>
    <hr>
    <!-- <h2>{{msg}}</h2> -->
    <button @click=changeMsg>Cambiar mensaje</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      changeMsg() {
        console.log('-cambiando mensaje')
        this.msg = 'Hello World2'
      }
    },




   beforeCreate(){
      console.log('beforeCreate')
   },
   created (){
      console.log('created')
      //se recomienda hacer llamadas a apis en este hook
   },
   beforeMount(){
      console.log('beforeMount')
   },
    mounted (){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated (){
        console.log('updated')
    },
    activated (){
        console.log('activated')
    },
    deactivated (){
        console.log('deactivated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted (){
        console.log('unmounted')
    },
    errorCaptured (){
        console.log('errorCaptured')
    },
    renderTracked (){
        console.log('renderTracked')
    },
  }
  </script>
  
  <style>
  
  </style>