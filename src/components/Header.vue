<template>
  <div
    fluid
    :style="'background:url('+logo+'); background-size: contain; background-repeat: no-repeat; background-position: center;'"
  >
    <v-btn class="primary" to="/">Home</v-btn>
    <v-btn class="success" to="/checkout">Checkout</v-btn>
  </div>
</template>

<script>
import logo from "../assets/images/FreshPlatezLogo.jpg";

export default {
  name: "Header",
  props: {},
  data: () => {
    return {
      logo: logo
    };
  }
};
</script>

<style scoped>
div {
  height: 80%;
  text-align: right;
  background-color: gray;
}
</style>
