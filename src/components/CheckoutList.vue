<template>
  <v-card elevation="6" class="mx-auto">
    <v-container>
      <v-row>
        <v-col col="12">
          <v-container v-bind:key="item.title" v-for="item in cart">
            <div v-if="!isMobile()">
              <CheckoutCard v-bind:item="item" />
            </div>
            <div v-else>
              <MobileCheckoutCard v-bind:item="item" />
            </div>
          </v-container>
        </v-col>
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
import CheckoutCard from "../components/CheckoutCard";
import MobileCheckoutCard from "../components/MobileCheckoutCard";
export default {
  name: "CheckoutList",
  components: {
    CheckoutForm,
    CheckoutCard,
    MobileCheckoutCard
  },
  data: () => ({
    displayModal: false,
    cart: [
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "1 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "2 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "3 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "4 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "5 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "6 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      }
    ]
  }),

  computed: {
    // mapGetters(["getItems"])
  },

  methods: {
    closeModal: function() {
      this.displayModal = !this.displayModal;
    },
    // isMobile method solution from https://stackoverflow.com/questions/48515023/display-different-vuejs-components-for-mobile-browsers
    // queries the devices operating system to determine if the user is mobile and toggles component render accordingly
    isMobile: function() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

