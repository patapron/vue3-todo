import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
    idCounter: 0,
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    counterIncrement(state) {
      state.idCounter++;
    },
  },
  actions: {
    getTodos: (state) => {
      // fetch(`https://todos.com/api/getTodos`)
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((response) => {
      //     state.commit("setTodos", response);
      //   });
      const response = [];
      state.commit("setTodos", response);
    },
    addTodo({ commit, state }, todo) {
      let tempTodo = [...state.todos];
      todo.id = state.idCounter;
      commit("counterIncrement");
      tempTodo.push(todo);
      commit("setTodos", tempTodo);
    },

    changeTodo({ commit, state }, todo) {
      let tempTodos = [...state.todos];
      tempTodos.forEach(element => {
        if(element.id === todo.id){
          element.name = todo.name
          element.completed = todo.completed
          return
        }
      });
      commit("setTodos", tempTodos);
    },

    deleteTodo({ commit, state }, todo) {
      let tempTodos = state.todos.filter((element) => {
        return element.id !== todo.id;
      });
      commit("setTodos", tempTodos);
    },

    deleteCompleted({ commit, state }) {
      let tempTodos = state.todos.filter((element) => {
        return !element.completed;
      });
      commit("setTodos", tempTodos);
    },
  },
  getters: {
    getCompleted: (state) => (value) => {
      let result = [];
      if (state.todos.length) {
        result = state.todos.filter((element) => element.completed === value);
      }
      return result;
    },
  },
});
