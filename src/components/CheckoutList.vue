<template>
  <v-card elevation="6" class="mx-auto">
    <v-container>
      <v-row>
        <v-col col="12" v-bind:key="item.title" v-for="item in cart">
          <CheckoutCard />
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

export default {
  name: "CheckoutList",
  components: {
    CheckoutForm,
    CheckoutCard
  },
  data: () => ({
    displayModal: false,
    cart: [
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "6 Beef Burger Over Spinach",
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
    }
  }
};
</script>

