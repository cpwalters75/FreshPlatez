<template>
  <v-app>
    <Header />
    <NavBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import router from "./router";

export default {
  name: "App",
  router,
  components: {
    Header,
    NavBar
  },
  data: () => ({})
};
</script>
