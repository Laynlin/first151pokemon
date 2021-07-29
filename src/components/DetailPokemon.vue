<template>
  <div class="row">
    <v-col cols="8">
      <v-card width="80%" height="500px">
        <v-img
          height="200px"
          :src="image"
          >
          <v-card-title class="black--text mt-8">
            <p class="ml-3">
              {{name}}
            </p>
          </v-card-title>
        </v-img>
        <template>
          <v-simple-table
            fixed-header
            height="500px"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    Attaque
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="move in pokemon.moves" :key="move.name">
                  <td @click="LoadMove(move.move.name)" >{{move.move.name}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-card>
    </v-col>
    <v-col cols="3">
      <DetailMove/>
    </v-col>
    </div>
</template>

<script>
import DetailMove from "@/components/DetailMove.vue";

export default {
  name: "Detail",
  props: ["name"],
  components: {
    DetailMove,
  },
  computed: {
    pokemon() {
      return this.$store.getters.pokemon;
    },
    move() {
      return this.$store.getters.move;
    },
    image() {
      return `https://img.pokemondb.net/sprites/black-white/normal/${this.pokemon.name}.png`;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPokemon", this.name);
  },
  methods: {
    LoadMove: function (name) {
      this.$store.dispatch("fetchMove", name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
