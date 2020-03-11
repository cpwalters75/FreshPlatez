<template>
  <v-card elevation="2" class="mx-auto">
    <v-container>
      <v-row>
        <v-col col="12">
          <v-container v-for="item in getCartItems" v-bind:key="item.id">
            <!-- Not able to set up functionality on desktop version of checkout cards in time for demo. Focusing on polishing MobileCheckout card instead -->
            <!-- <div v-if="!isMobile()">
              <CheckoutCard v-bind:item="item" @remove-cart-item="removeCartItem(item.id)" />
            </div>
            <div v-else>-->
            <MobileCheckoutCard v-bind:item="item" @remove-cart-item="removeCartItem(item.id)" />
            <!-- </div> -->
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12">
          <v-container elevation="2">
            <v-row>
              <v-col cols="12">
                <v-text-field disabled label="Order Total.....................$$$$$$$" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-dialog v-model="displayModal" persistent max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Proceed to Checkout</v-btn>
                  </template>
                  <CheckoutForm @close-modal="closeModal" />
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CheckoutForm from "../components/CheckoutForm";
// import CheckoutCard from "../components/CheckoutCard";
import MobileCheckoutCard from "../components/MobileCheckoutCard";
export default {
  name: "CheckoutList",
  components: {
    CheckoutForm,
    // CheckoutCard,
    MobileCheckoutCard
  },

  computed: mapGetters(["getCartItems"]),

  data: () => ({
    displayModal: false
  }),

  methods: {
    ...mapActions(["removeCartItem"]),
    closeModal: function() {
      this.displayModal = !this.displayModal;
    }
    // isMobile method solution from https://stackoverflow.com/questions/48515023/display-different-vuejs-components-for-mobile-browsers
    // queries the devices operating system to determine if the user is mobile and toggles component render accordingly
    // isMobile: function() {
    //   if (
    //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //       navigator.userAgent
    //     )
    //   ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

