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
      <ListGroup
        v-if="name1"
        :list="getCompleted(false)"
        :name="props.name1"
        @change-event="changeTodo"
      ></ListGroup>
      <!-- completed -->
      <ListGroup
        v-if="name2"
        :list="getCompleted(true)"
        :name="props.name2"
        @change-event="changeTodo"
      ></ListGroup>
    </v-list>
  </v-card>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, defineComponent, provide } from "vue";

import ListGroup from "../components/ListGroup.vue";
import mitt from "mitt";

export default defineComponent({
  name: "TodoList",
  components: {
    ListGroup,
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
      store.dispatch("changeTodo", evt);
    });
    provide("bus", bus);

    function addNewTodo() {
      let newTodo = { id: null, name: newTodoName.value, completed: false };
      store.dispatch("addTodo", newTodo);
      newTodoName.value = "";
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
