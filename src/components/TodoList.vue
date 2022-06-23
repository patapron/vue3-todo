<template>
  <v-card class="mx-auto" width="300">
    <v-list v-model:opened="open">
      <template v-for="(group, i) in all" :key="i">
        <!-- <template v-if="!item.list">
          <v-list-item
            append-icon="mdi-close"
            :title="item.name"
            :value="item.name"
          ></v-list-item>
        </template> -->

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="group.name"
              :value="group.name"
            ></v-list-item>
          </template>
          <v-list-item v-for="(element, j) in group.list" :key="j">
            <template v-slot:append>
              <v-container fluid class="pa-0 d-flex justify-space-between">
                <v-checkbox-btn v-model="element.completed"></v-checkbox-btn>
                <v-text-field
                  label="Include files"
                  hide-details
                  :value="element.name"
                ></v-text-field>
                <v-list-item-avatar end>
                  <v-btn
                    variant="text"
                    color="grey lighten-1"
                    icon="mdi-close"
                  ></v-btn>
                </v-list-item-avatar>
              </v-container>

              <!-- <v-checkbox-btn v-model="element.completed"></v-checkbox-btn>
              {{ element.name }} -->
            </template>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "TodoList",
  setup() {

    const prueba= true;
    const all = [
      {
        name: "completed",
        list: [
          { name: "item1", completed: true },
          { name: "item3", completed: true },
          { name: "item4", completed: true },
        ],
      },
      {
        name: "active",
        list: [
          { name: "item2", completed: false },
          { name: "item3", completed: false },
          { name: "item5", completed: false },
        ],
      },
    ];

    return { all, prueba };
  },
};
</script>

