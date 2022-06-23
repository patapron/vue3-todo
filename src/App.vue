<template>
  <v-row class="text-center pa-4" cols="12">
    <v-col cols="2">
      <v-img :src="require('./assets/logo.png')" contain height="30" />
    </v-col>
    <v-col cols="8" class="pa-4">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/characters">Characters</router-link> |
        <router-link to="/locations">Locations</router-link> |
        <router-link to="/episodes">Episodes</router-link>
      </nav>
    </v-col>
    <v-col cols="2">
      <v-dialog
        transition="dialog-top-transition"
        v-model="dialog"
        max-width="1000"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="primary" v-bind="attrs" @click.stop="dialog = true"
            ><v-icon> mdi-cart </v-icon></v-btn
          >
        </template>
        <v-card>
          <v-toolbar color="primary" dark>Cart</v-toolbar>
          <v-card-text>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Acción</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody id="items">
                <tr v-for="(item, index) in cart" :key="index">
                  <th scope="row">{{ item.id }}</th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.units }}</td>
                  <td>
                    <button
                      class="btn btn-info btn-sm"
                      @click="aumentar(item.id)"
                    >
                      +
                    </button>
                    <button
                      class="btn btn-danger btn-sm"
                      @click="disminuir(item.id)"
                    >
                      -
                    </button>
                  </td>
                  <td>${{ item.precio * item.cantidad }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr id="footer-carrito">
                  <th
                    scope="row"
                    colspan="5"
                    v-if="Object.keys(cart).length === 0"
                  >
                    Carrito vacío - comience a comprar!
                  </th>
                  <!-- <Footer v-else/> -->
                </tr>
              </tfoot>
            </table>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
import CartView from "./views/Cart";
export default {
  name: "App",
  components: {
    CartView,
  },
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);

    const showCart = () => {};
    return { cart };
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
