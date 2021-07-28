<template>
  <div>
    <img :src="'https://img.pokemondb.net/sprites/black-white/normal/' + pokemon.name + '.png'"/>
    {{ pokemon.name }}
    <div v-for="move in pokemon.moves" :key="move.name">
      <a @click="LoadMove(move.move.name)" >{{move.move.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ["name"],
  computed:{
    pokemon(){
      return this.$store.getters.pokemon
    },
    move(){
      return this.$store.getters.move
    }
  },
  mounted(){
    this.$store.dispatch("fetchPokemon", this.name)
  },
  methods:{
    LoadMove : function(name){ 
      this.$store.dispatch("fetchMove", name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
