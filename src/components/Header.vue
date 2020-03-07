<template>

  <div
    fluid
    :style="'background:url('+logo+'); background-size: contain; background-repeat: no-repeat; background-position: center;'"
  >
    
  </div>
 
</template>

<script>



import logo from "../assets/images/FreshPlatezLogo.jpg";

export default {
  name: "Header",
  data: () => {
    return {
      logo: logo,
      
        data: () => ({
      drawer: false,
    }),
    }
      }
    };
  

</script>

<style scoped>
div {
  min-height: 50%;
  text-align: right;
}
@media (max-width: 600px) {
  div {
    min-height: 20%;
  }
}
</style>
