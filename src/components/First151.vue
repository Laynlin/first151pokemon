<template>
  <div>
    <h1 v-if="loading">
      loading...
    </h1>
    <template>
      <v-row>
        <v-col
          v-for="pokemon in pokemons" :key="pokemon.name"
          class="d-flex child-flex"
          cols="1"
          align="center"
        >
          <router-link :to="{name: 'Pokemon', params: {name: pokemon.name}}">
            <v-img
              :src="image(pokemon.name)"
              width="100%"
            >
            </v-img>
          </router-link>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  name: 'First151',
  data(){
    return {
      loading: false,
    }
  },
  computed:{
    pokemons(){
      return this.$store.getters.pokemons
    },
  },
  methods: {
    image(name){
      return `https://img.pokemondb.net/sprites/black-white/normal/${name}.png`
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
