<template>
  <div>
    {{ effect }}
  </div>
</template>

<script>
export default {
  name: 'DetailMove',
  computed:{
    move(){
      return this.$store.getters.move
    },
    effect(){
      return this.move?.effect_entries?.[0].short_effect
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
