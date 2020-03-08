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
import axios from "axios";
export default {
  name: "Home",
  components: {
    MealCard
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
