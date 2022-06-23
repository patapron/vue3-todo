<template>
  <div class="d-flex justify-center">
    <h2>Characters</h2>
    <v-card max-width="500" class="mx-auto">
      <v-list two-line>
        <template v-for="(item, index) in characters" :key="index">
          <v-list-item @click="goToDetail(item.id)">
            <v-list-item-avatar class="me-3">
              <v-img :src="item.image"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.name"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.gender + ' - ' + item.species"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { Store, useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Characters",
  setup() {
    const store = useStore();
    const router = useRouter();
    onMounted(() => {
      store.dispatch("getCharacters");
    });
    const characters = computed(() => store.state.characters);

    function goToDetail(id) {
      router.push({ path: `/character/${id}` });
    }
    return { characters, goToDetail };
  },
  methods: {},
};
</script>
