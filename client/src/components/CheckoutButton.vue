<template>
<div>
            <v-btn to= "/checkout"
            v-if = "$route.name!=='Checkout'"
              fixed
              dark
              fab
              bottom
              right
              color="black"
            >
              <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
    </div>
</template>
<script>
  export default {
      name: "CheckoutButton" 
  }
</script>
<style>

</style>