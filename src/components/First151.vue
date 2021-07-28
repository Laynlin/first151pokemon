<template>
  <div>
    <h1 v-if="loading">
      loading...
    </h1>
    <div v-for="pokemon in pokemons" :key="pokemon">
      <router-link :to="{name: 'Pokemon', params: {name: pokemon.name}}"><img :src="'https://img.pokemondb.net/sprites/black-white/normal/' + pokemon.name + '.png'"/></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'First151',
  computed:{
    pokemons(){
      return this.$store.getters.pokemons
    },
    loading(){
      return this.$store.getters.loading
    }
  },
  mounted(){
    this.$store.dispatch("fetchPokemons");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
