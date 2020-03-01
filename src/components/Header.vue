<template>
  <div fluid class="fill-height">
    <v-btn class="primary" to="/">Home</v-btn>
    <v-btn class="success" to="/checkout">Checkout</v-btn>
  </div>
</template>

<script>
export default {
  name: "Header",

  data: () => {
    return {};
  }
};
</script>

<style scoped>
div {
  height: 60%;
  text-align: center;
  background-color: gray;
  /* background-image: url(`~@assets\images\FreshPlatezLogo.jpg`); */
  background-size: cover;
}
</style>
