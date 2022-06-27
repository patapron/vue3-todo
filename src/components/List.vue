<template>
  <v-list-group v-if="props.list.length > 0">
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" :title="name"></v-list-item>
    </template>
    <v-list-item v-for="(element, j) in props.list" :key="j">
      <ListItem :element="element" v-bind="$attrs"></ListItem>
    </v-list-item>
  </v-list-group>
</template>

<script>
import ListItem from "../components/ListItem.vue";

import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,
  name: "List",
  components: {
    ListItem,
  },
  props: { list: null, name: String },
  setup(props, context) {
    return {
      props,
    };
  },
});
</script>
