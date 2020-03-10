<template>

  <div>

  <v-card
    class="mx-auto overflow-hidden"
    
  >
    <v-app-bar
      color="black"
      dark
    >
     <v-app-bar-nav-icon @click="toggleNavbar"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

   
  </v-card>
   <v-navigation-drawer
      v-model="displayNavbar"
      absolute
      temporary
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

         

          <router-link to="/Menu" exact> <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/About" exact> <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/Pickup" exact> <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pickup</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/checkout" exact> <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
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


