<template>
  <TodoList />
</template>

<script>
import { defineComponent } from 'vue';
import TodoList from '../components/TodoList.vue';


// // Components
// import TodoList from '../components/TodoList.vue';

export default defineComponent({
  name: 'ActiveView',

  components: {
    TodoList,
  },
});
</script>
