import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
    // character: {},
    // cart: {},
  },
  getters: {},
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    // setCharacter(state, payload) {
    //   state.character = payload;
    // },
    // setChariD(state, payload) {
    //   state.charId = payload;
    // },
    // setCart(state, payload) {
    //   state.cart[payload.id] = payload;
    // },
  },
  actions: {
    getTodos: (state) => {
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          state.commit("setTodos", response);
        });
    },

    // getCharacter: (state, payload) => {
    //   fetch(`https://rickandmortyapi.com/api/character/${payload}`)
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((response) => {
    //       response.units = 0;
    //       response.price = 10;
    //       state.commit("setCharacter", response);
    //     });
    // },

    // async init ({commit}) {
    //   const response = await fetch('https://rickandmortyapi.com/api/character')
    //   const data = await response.json()
    //   commit("setCharacters", data.results);
    // },
  },
  modules: {},
});
