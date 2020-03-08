<template>
  <v-app>
    
    <NavBar />
    <CheckoutButton />
<<<<<<< HEAD
   
   
    <Header />
        <v-content>
          
       
      
      <router-view/>
      
=======

    <Header />
    <v-content>
      <router-view />
>>>>>>> e3ce07c1dcfde16c9db0ca980c3c2f11e4afaa59
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CheckoutButton from "./components/CheckoutButton"

import router from "./router";

export default {
  name: "App",
  router,
  components: {
    NavBar,
<<<<<<< HEAD
    Header,
    CheckoutButton
    
  },
  
}

=======
    Header
  }
};
>>>>>>> e3ce07c1dcfde16c9db0ca980c3c2f11e4afaa59
</script>
