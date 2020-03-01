<template>
  <v-app>
    <v-content>
      <Header />
      <Home />
      <router-view/>
      <CheckoutTest/>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Home from "./views/Home";
import router from "./router";
import CheckoutTest from "./components/CheckoutTest";

export default {
  name: "App",
  router,

  components: {
    Header,
    Home,
    CheckoutTest
  
  },

  data: () => ({
    //
  })
};
</script>
