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
import axios from "axios";

export default {
  name: "Admin",
  props: ["meals", "newMeal"],
  components: {
    AdminMealCard,
    AddMealCard
  },
  data: () => {
    return {
      meals: []
    };
  },
  created: function() {
    this.getMealData();
  },
  methods: {
    getMealData() {
      axios
        .get("/api/meals")
        .then(response => {
          this.meals = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
