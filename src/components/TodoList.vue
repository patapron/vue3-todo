<template>
  <v-card class="mx-auto" width="300">
    <v-text-field
      label="New todo"
      hide-details
      v-model="newTodoName"
      v-on:keyup.enter="addNewTodo"
    ></v-text-field>
    <v-list>
      <!-- active -->
      <List
        v-if="name1"
        :list="getCompleted(false)"
        :name="props.name1"
        @change-event="changeTodo"
      ></List>
      <!-- completed -->
      <List
        v-if="name2"
        :list="getCompleted(true)"
        :name="props.name2"
        @change-event="changeTodo"
      ></List>
    </v-list>
  </v-card>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, defineComponent, provide } from "vue";

import List from "../components/List.vue";
import mitt from "mitt";

export default defineComponent({
  name: "TodoList",
  components: {
    List,
  },
  props: {
    filterValue: {
      type: Boolean,
      default: false,
    },
    name1: String,
    name2: String,
  },
  setup(props) {
    const store = useStore();
    const all = computed(() => store.state.todos);
    const getCompleted = computed(() => store.getters.getCompleted);
    const newTodoName = ref("");
    const bus = mitt();
    bus.on("delete-event", (evt) => {
      store.dispatch("deleteTodo", evt);
    });
    bus.on("change-event", (evt) => {
      store.dispatch("changeTodo", e);
    });
    provide("bus", bus);

    function addNewTodo(e) {
      let newTodo = { id: null, name: newTodoName.value, completed: false };
      store.dispatch("addTodo", newTodo);
      newTodoName.value = "";
    }

    function deleteCompleted(e) {
      store.dispatch("deleteCompleted");
    }

    return {
      all,
      newTodoName,
      addNewTodo,
      getCompleted,
      props,
    };
  },
});
</script>
