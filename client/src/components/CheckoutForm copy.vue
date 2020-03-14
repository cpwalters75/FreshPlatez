<template>
  <v-card max-width: auto outlined raised color="grey lighten-5">
    <v-card-title>
      <span class="headline">Please complete the below</span>
    </v-card-title>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation ma-2>
        <v-text-field v-model="firstName" :rules="FNameRules" label="First Name" required></v-text-field>

        <v-text-field v-model="lastName" :rules="LNameRules" label="Last Name"></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-textarea v-model="notes" auto-grow label="Notes to the chef" rows="1"></v-textarea>
        <v-text-field disabled v-model="orderTotal" label="Order Total" outlined></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :rules="[
            v => !!v || 'You must acknowledge pickup location to continue!'
          ]"
          label="Pick up is at CrossFit Bona Fide, Greenland, NH"
          required
          class="mb-4"
        ></v-checkbox>

        <v-btn color="danger" class="ma-4" @click="$emit('close-modal')">Cancel</v-btn>
        <v-btn color="primary" class="ma-4">Log In</v-btn>
        <v-btn
          :disabled="!valid"
          color="success"
          class="ma-2"
          @click="validate(); overlay = !overlay"
        >Place Order</v-btn>
        <v-overlay :value="overlay">
          <v-btn color="success" @click="overlay= !overlay; show= !show">
            Order Updated!
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
  computed: mapGetters(["getCartItems"] ),
  data: () => ({
    checkbox: false,
    show: false,
    valid: true,
    overlay: false,
    firstName: "",
    FNameRules: [v => !!v || "First name is required"],
    lastName: "",
    LNameRules: [v => !!v || "Last name is required"],

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    notes: ""
  }),

  methods: {
    validate() {
      
      
      if (this.$refs.form.validate()) {
        const Fname = this.firstName;
        const Lname = this.lastName;
        const email = this.email;
        const notes = this.notes;
        const cart = this.getCartItems
        const emailParams = {
          email,
          Fname,
          Lname,
          notes,
          cart
        
        };
        
        axios
          .post("/api/email", emailParams)
          .then(function(response) {
            
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        // added by Dan to send info to DB  
        axios
          .post("/api/orders", emailParams)
          .then(function(response) {
            
            console.log(response);
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
