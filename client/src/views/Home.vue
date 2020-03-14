<template>
  <v-card elevation="2" class="mx-auto">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          xs="1"
          md="3"
          v-bind:key="meal.id"
          v-show="meal.is_active === true"
          v-for="meal in meals"
        >
          <MealCard v-bind:meal="meal" @add-cart-item="addCartItem" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions(["addCartItem"]),
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
