<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import router from "./router";

export default {
  name: "App",
  router,
  components: {
    Header
  },
  data: () => ({})
};
</script>
