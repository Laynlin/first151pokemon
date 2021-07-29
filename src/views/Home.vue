<template>
  <div class="home">
    <First151 />
  </div>
</template>

<script>
// @ is an alias to /src
import First151 from '@/components/First151.vue'

export default {
  name: 'Home',
  components: {
    First151
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      vm.$store.dispatch("fetchPokemons");
    })
  }
}
</script>
