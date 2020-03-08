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
        <v-btn :disabled="!valid" color="success" class="ma-2" @click="validate">Place Order</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    checkbox: false,
    show: false,
    valid: true,
    firstName: "",
    FNameRules: [v => !!v || "First name is required"],
    lastName: "",
    LNameRules: [v => !!v || "Last name is required"],

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    notes: "",
    checkbox: ""
  }),

  methods: {
    validate(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        const Fname = this.firstName;
        const Lname = this.lastName;
        const email = this.email;
        const notes = this.notes;
        const emailParams = {
          email,
          Fname,
          Lname,
          notes
        };

        axios
          .post("/api/email", emailParams)
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
