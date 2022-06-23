<template>
  <Description />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Description from '../components/Description.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Description,
  },
});
</script>
