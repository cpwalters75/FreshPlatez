<template>
  <div>
    Hello
  <!-- <v-card v-for="item in getItems" :key="item.id"></v-card> -->
  <CheckoutForm />
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
import CheckoutForm from "../components/CheckoutForm";

export default {
  name: "CheckoutList",
  components: {
    CheckoutForm
  },
  data: () => ({}),

  computed: {
    // mapGetters(["getItems"])
  },

  methods: {}
};
</script>

