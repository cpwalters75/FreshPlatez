<template>
  <v-app>
    <v-content>
      <Header />
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Header,
    Home
  },

  data: () => ({
    //
  })
};
</script>
