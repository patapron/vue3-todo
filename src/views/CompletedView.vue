<template>
  <TodoList :name2="'Completed'" :filterValue="true" />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import TodoList from '../components/TodoList.vue';

export default defineComponent({
  name: 'CompletedView',

  components: {
    TodoList,
  },
});
</script>
