<template>
  <TodoList :name1="'Active'" :name2="'Completed'" />
</template>

<script>
import { defineComponent } from "vue";

// Components
import TodoList from "../components/TodoList.vue";

export default defineComponent({
  name: "AllView",
  components: {
    TodoList,
  },
});
</script>
