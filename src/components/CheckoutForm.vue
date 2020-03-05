<template>
  <v-card max-width="420" outlined raised color="grey lighten-5">
    <v-card-title
      >Please Complete the Below
      <v-form ref="form" v-model="valid" lazy-validation>
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

        <v-checkbox
          v-model="checkbox"
          :rules="[
            v => !!v || 'You must acknowledge pickup location to continue!'
          ]"
          label="Pick up is at CrossFit Bona Fide, Greenland, NH"
          required
          class="mb-4"
        ></v-checkbox>

        <v-btn color="primary" class="mr-4 mb-2">
          Log In
        </v-btn>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Place Order
        </v-btn>
      </v-form>
    </v-card-title>
  </v-card>
</template>

<script>

import axios from 'axios';
import { EventBus } from "../event-bus"
export default {
  data: () => ({
    show: false,
    valid: true,
    firstName: "",
    FNameRules: [
      v => !!v || "First name is required",
    ],
    lastName: "",
    LNameRules: [
      v => !!v || "Last name is required",
    ],

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),


  methods: {
    validate(e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        // console.log(this.firstName, this.lastName, this.email);
        const Fname = this.firstName;
        const Lname = this.lastName;
        const email = this.email;
        const emailParams = {
          email, Fname, Lname
        };

      axios.post('/api/email', emailParams)
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error)
          
      });
  }},

    created() {
      EventBus.$on('show', (data) => {
        this.show = data
      })
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
