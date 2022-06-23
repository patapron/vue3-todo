<template>
  <v-row class="text-center pa-4" cols="12">
    <v-col cols="2">
      <h2>TODOS</h2>
    </v-col>
    <v-col cols="8" class="pa-4">
      <nav>
        <router-link to="/all">all</router-link> |
        <router-link to="/active">acitve</router-link> |
        <router-link to="/completed">completed</router-link>
      </nav>
    </v-col>
  </v-row>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "App",

  setup() {
    // const store = useStore();
    // const router = useRouter();
    // onMounted(() => {
    //   store.dispatch("getTodos");
    // });
    // const todos = computed(() => store.state.todos);

    // function goToDetail(id) {
    //   router.push({ path: `/character/${id}` });
    // }
    // return { characters, goToDetail };

  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
