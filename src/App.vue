<template>
  <v-app>
    <NavBar />
    <CheckoutButton />

    <Header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CheckoutButton from "./components/CheckoutButton";

import router from "./router";

export default {
  name: "App",
  router,
  components: {
    NavBar,
    Header,
    CheckoutButton
  }
};
</script>
