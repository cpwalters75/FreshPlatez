<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <div v-bind:key="meal.id" v-for="meal in meals">
          <MealCard v-bind:meal="meal" />
        </div>
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
