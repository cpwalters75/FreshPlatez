<template>
  <v-app>
    <NavBar />
   
    <Header />
        <v-content>
      
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar"
import Header from "./components/Header";

import router from "./router";

export default {
  name: "App",
  router,
  components: {
    NavBar,
    Header
    
  },
  
}

</script>
