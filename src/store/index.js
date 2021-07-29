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
    move : []
  },
  getters:{
    pokemons: state => { return state.pokemons },
    pokemon: state => { return state.pokemon },
    move : state => { return state.move }
  },
  mutations: {
    setPokemons: (state, pokemons) => state.pokemons = pokemons,
    setPokemon: (state, pokemon) => state.pokemon = pokemon,
    setMove: (state, move) => state.move = move,
    initMove: (state) => state.move = null
  },
  actions: {
    async fetchPokemons({commit}){
      try{
        const response = await axios.get(pokemons_uri)
        commit('setPokemons', response.data.results)
      } catch(e){ return e }
    },
    async fetchPokemon({commit}, name){
      try{
        const response = await axios.get(pokemon_uri + name)
        commit('setPokemon', response.data)
      } catch(e){ return e }
    },
    async fetchMove({commit}, name){
      try{
        const response = await axios.get(move_uri + name)
        commit('setMove', response.data)
      } catch(e){ return e }
    },
    initMove({commit}){
      commit('initMove')
    }
  },
  
})
