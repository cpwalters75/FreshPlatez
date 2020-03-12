<template>
  <div
    fluid
    :style="'background:url('+logo+'); background-size: contain; background-repeat: no-repeat; background-position: center;'"
  ></div>
</template>

<script>
import logo from "../assets/images/FreshPlatezLogo.jpg";

export default {
  name: "Header",
  data: () => {
    return {
      logo: logo,

      data: () => ({
        drawer: false
      })
    };
  }
};
</script>

<style scoped>
div {
  height: 600px;
  text-align: right;
}
@media (max-width: 600px) {
  div {
    height: 350px;
  }
}
</style>
