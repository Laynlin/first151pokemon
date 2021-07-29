<template>
  <div class="pokemon">
    <v-container>
      <DetailPokemon :name='name'/>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import DetailPokemon from '@/components/DetailPokemon.vue'

export default {
  name: 'Pokemon',
  props:['name'],
  components: {
     DetailPokemon,
  },
  beforeRouteLeave (to, from, next){
    this.$store.dispatch('initMove')
    next()
  }
}
</script>
