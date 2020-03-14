<template>
  <v-card max-width: auto outlined raised color="grey lighten-5">
    <v-card-subtitle class="title" text-align="center">
      <span class="headline">Please complete the below</span>
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation ma-2>
        <v-text-field
          v-model="firstName"
          :rules="FNameRules"
          label="First Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          :rules="LNameRules"
          label="Last Name"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-textarea
          v-model="notes"
          auto-grow
          label="Notes to the chef"
          rows="1"
        ></v-textarea>
        <v-text-field
          disabled
          v-model="orderTotal"
          label="Order Total"
          outlined
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :rules="checkBoxRule"
          label="Pick up is at CrossFit Bona Fide, Greenland, NH"
          required
          class="mb-4"
        ></v-checkbox>

        <v-btn color="danger" class="ma-4" @click="$emit('close-modal')"
          >Cancel</v-btn
        >
        
        <v-btn
          :disabled="!valid"
          color="success"
          class="ma-2"
          @click="validate(); overlay = !overlay; $emit('clear-cart-data');"
        >Place Order</v-btn>
        

        <v-overlay :value="overlay">
          <v-btn color="success" @click="overlay= !overlay; show= !show; $emit('close-modal')">
            Order Submitted!
            <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-overlay>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "CheckoutForm",
  props: ["orderTotal"],
  computed: mapGetters(["getCartItems"]),
  data: () => ({
    checkbox: false,
    show: false,
    valid: true,
    overlay: false,
    firstName: "",
    FNameRules: [v => !!v || "First name is required"],
    checkBoxRule: [ v => !!v || 'You must acknowledge pickup location to continue!'],
    lastName: "",
    LNameRules: [v => !!v || "Last name is required"],

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    notes: "",
    orderTotal: ""
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const Fname = this.firstName;
        const Lname = this.lastName;
        const email = this.email;
        const notes = this.notes;
        const cart = this.getCartItems;
        const orderTotal = this.orderTotal;
        // const cartItems = cart.forEach(function(item){
        //   return [item.shortDescription, item.quantity, item.meal_size]
        // })
        const cartItemsObject = [];

        cart.forEach(item => {
          let newItem = {
            Dish: item.short_Description,
            Quantity: item.quantity,
            Size: item.meal_size
          };

          cartItemsObject.push(newItem);
        });
        const cartItems = JSON.stringify(cartItemsObject);

        const emailParams = {
          email,
          Fname,
          Lname,
          notes,
          orderTotal,
          cartItems
        };
        console.log("cartArray", cartItemsObject);
        axios
          .post("/api/email", emailParams)
          .then(function(response) {
            console.log(response);
            console.log("emailParams", emailParams);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped></style>
