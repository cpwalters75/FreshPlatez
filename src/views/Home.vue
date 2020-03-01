<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <MealCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import MealCard from "../components/MealCard.vue";
export default {
  name: "Home",
  components: {
    MealCard
  }
};
</script>
