<template>
  <v-card elevation="2" class="mx-auto">
    <v-container>
      <v-row>
        <v-col col="12">
          <v-container v-for="item in cart" v-bind:key="item.id">
            <div v-if="!isMobile()">
              <CheckoutCard v-bind:item="item" />
            </div>
            <div v-else>
              <MobileCheckoutCard v-bind:item="item" />
            </div>
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
import { mapGetters } from "vuex";
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
        image_name: "ChickenTinga.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "2 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        image_name: "ChickenTinga.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "3 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        image_name: "ChickenTinga.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "4 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        image_name: "ChickenTinga.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "5 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        image_name: "ChickenTinga.jpg"
      },
      {
        price_small: "7.50",
        price_large: "12.00",
        qty_small: "3",
        qty_large: "1",
        title: "6 Beef Burger Over Spinach",
        shortDescription:
          "A beef burger over spinach with pickled zucchini and sweet potatato fries",
        image_name: "ChickenTinga.jpg"
      }
    ]
  }),

  computed: {
    mapGetters([" getItems" ])
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

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

