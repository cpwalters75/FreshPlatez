<template>

  <v-container>
    <v-row>
      <v-col col="4" v-bind:key="meal.id" v-for="meal in meals">
        <AdminMealCard v-bind:meal="meal" />
      </v-col>
    </v-row>
  
    <v-row>
      <v-col col="4">
        <AddMealCard v-bind:newMeal="newMeal" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminMealCard from "../components/AdminMealCard.vue";
import AddMealCard from "../components/AddMealCard.vue";
export default {
  name: "Admin",
  props: ["meals", "newMeal"],
  components: {
    AdminMealCard,
    AddMealCard
  }
};
</script>
