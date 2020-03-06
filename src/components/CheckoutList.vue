<template>
 <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Proceed to Checkout</v-btn>
      </template>
  <!-- <v-card v-for="item in getItems" :key="item.id"></v-card> -->
      <CheckoutForm />
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
    dialog: false
  }),

  computed: {
    // mapGetters(["getItems"])
  },

  methods: {}
};
</script>

