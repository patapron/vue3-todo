/* eslint-disable prettier/prettier */
import TodoList from "@/components/TodoList.vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import storeConfig from "../../store/index";
import { mutations } from "@/store/index.js";
import { cloneDeep } from "lodash";
import { createLocalVue } from "@vue/test-utils";

import store from "@/store/index.js";

describe("TodoList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoList);
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('"counterIncrement" increments "state.idCounter" by 1', () => {
    expect(store.state.idCounter).toBe(0);
    store.commit("counterIncrement");
    expect(store.state.idCounter).toBe(1);
  });

  // it('"setTodos" set state.todos with whatever', () => {
  //   expect(store.state.todos).toEqual([]);
  //   store.commit("setTodos", [{ id: 0, name: "test", completed: false }]);
  //   expect(store.state.todos).toEqual([
  //     { id: 0, name: "test", completed: false },
  //   ]);
  // });

  it("addTodo", async () => {
    store.dispatch("addTodo", { id: null, name: "test", completed: false });
    expect(store.state.todos).toEqual([
      { id: 1, name: "test", completed: false },
    ]);
  });

  it("deleteTodo", async () => {
    store.dispatch("deleteTodo", { id: 1, name: "test", completed: false });
    expect(store.state.todos.length).toBe(0);
  });
});

it("changeTodo", async () => {
  store.dispatch("addTodo", { id: null, name: "test", completed: false });
  store.dispatch("changeTodo", { id: 2, name: "test2", completed: true });

  expect(store.state.todos[0]).toEqual({
    id: 2,
    name: "test2",
    completed: true,
  });
});

// import { createStore } from 'vuex'

// describe("TodoList", () => {

//   const store = createStore({
//     state() {
//       return {
//         idCounter: 0
//       }
//     },
//     mutations: {
//       counterIncrement(state) {
//         state.idCounter += 1
//       }
//     }
//   })
//   beforeEach(() => {
//   });

//   it("vuex", async () => {
//     const wrapper = mount(TodoList, {
//       global: {
//         plugins: [store],
//       },
//     });
//     console.log("STORE", store)
//     expect(store.state.idCounter).toBe(0);
//     store.commit("counterIncrement");
//     expect(store.state.idCounter).toBe(1);
//   });
// });
