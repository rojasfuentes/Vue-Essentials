<template>
  <h1>Pokemon: <span># {{ id }}</span></h1>
  <div v-if="pokemon">
  <img :src="pokemon.sprites.front_default" :alt="pokemon.name"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    

  //la diferencia entre props y data es que props se usa para pasar datos desde el padre al hijo
  //y data se usa para pasar datos desde el hijo al padre
    }
  ,

  created() {
    /* const { id } = this.$route.params

    console.log(id)
    this.id = id */
    this.getPokemon()
  },

  methods:{
    async getPokemon(){
      try{
        const { id } = this.$route.params
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon = await response.json()
        console.log(pokemon)

      }catch(error){
        this.$router.push('/404')
        console.log(error)
      }
    }
  },

  watch: {
    id(){
      this.getPokemon()
    }
  }
}
</script>

<style>

</style>