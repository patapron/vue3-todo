/* eslint-disable prettier/prettier */
import TodoList from "@/components/TodoList.vue";
import { shallowMount } from "@vue/test-utils";
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

  it("changeTodo", async () => {
    store.dispatch("addTodo", { id: null, name: "test", completed: false });
    store.dispatch("changeTodo", { id: 2, name: "test2", completed: true });

    expect(store.state.todos[0]).toEqual({
      id: 2,
      name: "test2",
      completed: true,
    });
  });

  it("mock function", () => {
    wrapper.vm.newTodoName = "testAdd";
    const mockFn = jest.fn(() => {
      let newTodo = { id: null, name: wrapper.vm.newTodoName.value, completed: false };
      store.dispatch("addTodo", newTodo);
      wrapper.vm.newTodoName = "";
    });
    mockFn();
    expect(wrapper.vm.newTodoName).toBe("");
  });

  it("getCompleted getters", async () => {
    const completed = store.getters.getCompleted(true)
    expect(completed.length).toBe(1);
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
