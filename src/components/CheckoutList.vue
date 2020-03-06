<template>
 <v-row justify="center">
    <v-dialog v-model="displayModal" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Proceed to Checkout</v-btn>
      </template>
  <!-- <v-card v-for="item in getItems" :key="item.id"></v-card> -->
        <CheckoutForm @close-modal="closeModal" />
    </v-dialog>
  </v-row>
</template>

<script>
//import { mapGetters } from "vuex";
import CheckoutForm from "../components/CheckoutForm";

export default {
  name: "CheckoutList",
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
    closeModal: function () {
      this.displayModal = !this.displayModal;
    }
  }
};
</script>

