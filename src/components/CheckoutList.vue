<template>
  <v-card elevation="6" class="mx-auto">
    <v-container>
      <v-row>
        <v-col col="12"></v-col>
      </v-row>

      <v-row justify="center">
        <v-dialog v-model="displayModal" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Proceed to Checkout</v-btn>
          </template>
          <!-- <v-card v-for="item in getItems" :key="item.id"></v-card> -->
          <CheckoutForm @close-modal="closeModal" />
        </v-dialog>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
//import { mapGetters } from "vuex";
import CheckoutForm from "../components/CheckoutForm";

export default {
  name: "CheckoutList",
  props: ["cart"],
  components: {
    CheckoutForm
  },
  data: () => ({
    displayModal: false
  }),

  computed: {
    // mapGetters(["getItems"])
  },

  methods: {
    closeModal: function() {
      this.displayModal = !this.displayModal;
    }
  }
};
</script>

