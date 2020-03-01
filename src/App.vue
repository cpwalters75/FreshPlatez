<template>
  <v-app>
    <v-content>
      <Header />
      <Home />
    </v-content>
    
    <div>
      <Checkout />
    </div>
    <div>
      <CheckoutTest />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import CheckoutTest from "./components/CheckoutTest";
import router from "./router";

export default {
  name: "App",
  router,

  components: {
    Header,
    Home,
    Checkout,
    CheckoutTest
  },

  data: () => ({
    //
  })
};
</script>
