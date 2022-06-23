import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    character: {},
    cart: {},
  },
  getters: {},
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharacter(state, payload) {
      state.character = payload;
    },
    setChariD(state, payload) {
      state.charId = payload;
    },
    setCart(state, payload) {
      state.cart[payload.id] = payload;
    },
  },
  actions: {
    getCharacters: (state) => {
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          response.results.forEach((element) => {
            element.units = 0;
            element.price = 10;
          });
          state.commit("setCharacters", response.results);
        });
    },

    getCharacter: (state, payload) => {
      fetch(`https://rickandmortyapi.com/api/character/${payload}`)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          response.units = 0;
          response.price = 10;
          state.commit("setCharacter", response);
        });
    },
    addToCart({ commit, state }, character) {
      character.units = state.cart.hasOwnProperty(character.id)
        ? state.cart[character.id].units + 1
        : 1;
      commit("setCart", character);
    },

    // async init ({commit}) {
    //   const response = await fetch('https://rickandmortyapi.com/api/character')
    //   const data = await response.json()
    //   commit("setCharacters", data.results);
    // },
  },
  modules: {},
});
