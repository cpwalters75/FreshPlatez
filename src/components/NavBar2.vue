<template>
<v-app-bar fixed dense>
  <v-toolbar-title>Fresh Platez</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
     <v-btn text to="/admin">Admin</v-btn> 
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/Menu">Menu</v-btn>
    <v-btn text to= "/About">About</v-btn>
    <v-btn text to= "/Pickup Location">Pickup Location</v-btn>
    <v-btn tex to= "/checkout">Checkout</v-btn>
    
  </v-toolbar-items>
  
</v-app-bar>
</template>

<script>
export default {
    name: "NavBar"
};
</script>

<style>
nav {
    height: 60px;
    width: 100%
}
</style>