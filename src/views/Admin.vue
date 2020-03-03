<template>
  <v-container>
    <v-row>
      <v-col col="4" v-bind:key="meal.id" v-for="meal in meals">
        <AdminMealCard v-bind:meal="meal" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminMealCard from "../components/AdminMealCard.vue";
export default {
  name: "Admin",
  props: ["meals"],
  components: {
    AdminMealCard
  }
};
</script>
