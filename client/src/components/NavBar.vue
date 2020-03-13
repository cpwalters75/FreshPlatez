<template >

  <div >

  <v-card
    class="mx-auto "
    
  >
    <v-app-bar
      color="black"
      dark
    style="position:fixed"
    absolute
    >

     <v-app-bar-nav-icon @click="toggleNavbar"></v-app-bar-nav-icon>

      <v-toolbar-title>Fresh Platez</v-toolbar-title>
    </v-app-bar>

   
  </v-card>
   <v-navigation-drawer
      v-model="displayNavbar"
      class="index"
      temporary
      absolute
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/" exact><v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
             <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
            </router-link>

        

          <router-link to="/About" exact> <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-arm-flex</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          </router-link>

          

          <router-link to="/checkout" exact> <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cash-register</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Checkout</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
</div>
</template>
<script>
  export default {
    data: () => ({
    displayNavbar: false
  }),
  methods: {
    toggleNavbar: function() {
      this.displayNavbar = !this.displayNavbar;
    }
  }
  }
</script>
<style >
.index {
  z-index: +1;
}
</style>

