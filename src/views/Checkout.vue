<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <CheckoutList />
      </v-col>
      <v-col cols="6" md="4">
        <CheckoutForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CheckoutList from "../components/CheckoutList";
import CheckoutForm from "../components/CheckoutForm";

export default {
  name: "Checkout",
  components: {
    CheckoutList,
    CheckoutForm
  }
};
</script>
