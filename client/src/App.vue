<template>
  <v-app>
    <NavBar class="mb-10" />
    <CheckoutButton />
    <Header class="mt-10" />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CheckoutButton from "./components/CheckoutButton";
import Footer from "./components/Footer";

import router from "./router";

export default {
  name: "App",
  router,
  components: {
    NavBar,
    Header,
    CheckoutButton,
    Footer
  }
};
</script>

