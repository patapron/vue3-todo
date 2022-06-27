<template>
  <v-list-item-avatar start>
    <v-checkbox
      v-model="props.element.completed"
      hide-details
      @change="changeEmit(props.element)"
    ></v-checkbox>
  </v-list-item-avatar>

  <v-list-item-header>
    <v-list-item-title
      ><v-btn v-if="!editing" variant="flat" @click="editToggle">{{
        props.element.name
      }}</v-btn>
      <v-text-field
        v-else
        label="Include files"
        hide-details
        v-model="props.element.name"
        v-on:keyup.enter="changeEmit(props.element)"
      ></v-text-field>
    </v-list-item-title>
  </v-list-item-header>
  <v-list-item-avatar end>
    <v-btn
      @click="deleteEmit(props.element)"
      variant="text"
      color="grey lighten-1"
      icon="mdi-close"
    ></v-btn>
  </v-list-item-avatar>
</template>

<script>
import { ref, inject } from "vue";

export default {
  name: "ListItem",
  props: { element: null },
  setup(props, context) {
    const editing = ref(false);
    const bus = inject("bus");

    function editToggle() {
      editing.value = !editing.value;
    }

    function changeEmit(event) {
      editToggle();
      bus.emit("delete-event", event);
    }

    function deleteEmit(event) {
      if (!editing.value) {
        bus.emit("delete-event", event);
      }
    }
    return {
      editing,
      editToggle,
      changeEmit,
      deleteEmit,
      props,
    };
  },
};
</script>
