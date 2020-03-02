<template>
  <v-container>
    <v-row>
      <v-col col="4" v-bind:key="meal.id" v-for="meal in meals">
        <MealCard v-bind:meal="meal" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MealCard from "../components/MealCard.vue";
export default {
  name: "Home",
  props: ["meals"],
  components: {
    MealCard
  }
};
</script>
