<template>
  <v-row class="text-center pa-4" cols="12">
    <v-col cols="2">
      <h2>TODOS</h2>
    </v-col>
  </v-row>
  <v-app>
    <v-main>
      <v-card>
        <router-view />
        <v-card-actions class="justify-space-between">
          <template v-if="all.length > 0">
            <div>{{ getCompleted(false).length + " : items left" }}</div>
            <div>
              <nav>
                <router-link to="/all">all</router-link> |
                <router-link to="/active">acitve</router-link> |
                <router-link to="/completed">completed</router-link>
              </nav>
            </div>
            <div>
              <v-btn variant="flat" @click="deleteCompleted"
                >Clear Completed</v-btn
              >
            </div>
          </template>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "App",

  setup() {
    const store = useStore();
    const all = computed(() => store.state.todos);
    const getCompleted = computed(() => store.getters.getCompleted);

    onMounted(() => {
      store.dispatch("getTodos");
    });

    function deleteCompleted() {
      store.dispatch("deleteCompleted");
    }

    // const all = computed(() => store.state.todos);

    // function goToDetail(id) {
    //   router.push({ path: `/character/${id}` });
    // }
    return { all, getCompleted, deleteCompleted };
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
