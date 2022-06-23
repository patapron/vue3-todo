<template>
  <div class="d-flex justify-space-between">
    <v-subheader>Character</v-subheader>
    <v-card max-width="450" class="mx-auto">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5" v-text="character.name"></v-card-title>

          <v-card-subtitle
            v-text="character.gender + ' - ' + character.species"
          ></v-card-subtitle>

          <!-- <label>Ogirin</label>
        <router-link :to="{ name: 'locate', params: { id: '3' } }">{{
          character.origin.name
        }}</router-link>

        <label>Episodes</label>
        <router-link
          v-for="(episode, index) in characters"
          :key="index"
          :to="{ name: 'episode', params: { id: episode } }"
          >{{ episode }}</router-link
        > -->
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            @click="addCartAcction(character)"
          >
            <v-icon dark> mdi-cart </v-icon>
          </v-btn>
        </div>

        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="character.image"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Character",
  props: {
    id: { type: String, required: true },
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const character = computed(() => store.state.character);

    onMounted(() => {
      store.dispatch("getCharacter", route.params.id);
    });

    const addCartAcction = (char) => {
      console.log("agregar", char);
      store.dispatch("addToCart", char);
    };

    function onBack() {
      console.log("Going Back...");
      router.back();
    }
    return { character, onBack, addCartAcction };
  },
};
</script>
