import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const pokemons_uri = "http://pokeapi.co/api/v2/pokemon?limit=151";
const pokemon_uri = "http://pokeapi.co/api/v2/pokemon/";
const move_uri = "http://pokeapi.co/api/v2/move/";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    pokemons : [],
    pokemon : [],
    move : [],
    loading: false
  },
  getters:{
    pokemons: state => { return state.pokemons },
    pokemon: state => { return state.pokemon },
    move : state => { return state.move },
    loading: state => {return state.loading }
  },
  actions: {
    async fetchPokemons({commit}){
      commit('setLoading', true);
      const response = await axios.get(pokemons_uri);
      commit('setPokemons', response.data.results);
      commit('setLoading', false);
    },
    async fetchPokemon({commit}, name){
      commit('setLoading', true);
      const response = await axios.get(pokemon_uri + name);
      commit('setPokemon', response.data);
      commit('setLoading', false);
    },
    async fetchMove({commit}, name){
      commit('setLoading', true);
      const response = await axios.get(move_uri + name);
      commit('setMove', response.data);
      commit('setLoading', false);
    }
  },
  mutations: {
    setPokemons: (state, pokemons) => state.pokemons = pokemons,
    setPokemon: (state, pokemon) => state.pokemon = pokemon,
    setMove: (state, move) => state.move = move,
    setLoading: (state, bool) => state.loading = bool
  }
})
