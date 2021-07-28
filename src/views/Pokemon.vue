<template>
  <div class="pokemon">
    <img @click="GotoHome()" alt="Vue logo" src="../assets/logo.png"/>
    <DetailPokemon :name='name'/>
    <DetailMove />
  </div>
</template>

<script>
// @ is an alias to /src
import DetailPokemon from '@/components/DetailPokemon.vue'
import DetailMove from '@/components/DetailMove.vue'

export default {
  name: 'Pokemon',
  props:['name'],
  components: {
     DetailPokemon, 
     DetailMove
  },
  methods:{
    GotoHome(){
      this.$router.push('/');
    }
  }
}
</script>
