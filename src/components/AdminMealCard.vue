<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-img
      :src="require('../assets/images/' + meal.image_name)"
      alt= "meal.short_Description"
      height="200px"
      width="344px"
    >
    </v-img>

    <v-card-title>
     Current Title:  {{ meal.short_Description }}
      <v-text-field
        v-model="newName"
        label="New Name"
        required
        clearable= true
      ></v-text-field>
      <v-btn
        @click="show = !show"
        fab
        dark
        small
        color="primary "
        bottom
        right
        absolute
      >
        <v-icon>{{ show ? "mdi-minus" : "mdi-plus" }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>Current Ingredients: {{ meal.ingredients }}
      <v-textarea
        v-model="newIngredients"
        :rules="shortDescriptionRules"
        label="Update Ingredients"
        required
        clearable= true
        auto-grow= true
      >
      </v-textarea>
    </v-card-subtitle>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-actions>
          <v-col col="4" text-align="center">
            <v-select
              :items="pricing"
              label="Current Size/Price(ea)"
              dense
              solo
            ></v-select>

            <v-text-field
              v-model="newSmallPrice"
              label="New Price for Small"
              prefix="$"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="newLargePrice"
              label="New Price for Large"
              prefix="$"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="newLargeCal"
              label="New Calorie Range for Large"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="newSmallCal"
              label="New Calorie Range for Large"
              type="number"
            ></v-text-field>

            <v-btn
              class="large"
              depressed
              color="success"
              @click="
                updateMeal(meal);
                overlay = !overlay;
              "
              >Save Updates</v-btn
            >

            <v-btn class="ml-5 small red">
              Delete
            </v-btn>

            <v-switch
              :label="`Show: ${mealShow.toString()}`"
              v-model="mealShow"
            ></v-switch>
          </v-col>
        </v-card-actions>
      </div>
    </v-expand-transition>
    <v-overlay :absolute="absolute" :value="overlay">
      <v-btn
        color="success"
        @click="
          overlay = !overlay;
        "
      >
        Meal Updated!
        Refresh page to see change!
        <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-overlay>
  </v-card>
</template>

<script>
import axios from "axios";


export default {
  name: "AdminMealCard",
  props: ["meal"],
  data: () => ({
    show: true,
    absolute: true,
    overlay: false,
    valid: false,
    name: ``,
    shortDescriptionRules: [],
    pricing: ["Small.....$7.50", "Large.....$12.00"],
    newName: "",
    newIngredients: "",
    newSmallPrice: "",
    newLargePrice: "",
    newSmallCal: "",
    newLargeCal: "",
    mealShow: true
  }),

  methods: {
    

    updateMeal(meal) {
      console.log(meal)
      const id = meal.id
      const name = this.newName === "" ? meal.short_Description : this.newName
      const ingredients = this.newIngredients === "" ? meal.ingredients : this.newIngredients
      const smallPrice = this.newSmallPrice === "" ? meal.price_small : this.newSmallPrice 
      const largePrice = this.newLargePrice === "" ? meal.price_large : this.newLargePrice 
      const smallCal = this.newSmallCal === "" ? meal.calories_small : this.newSmallCal 
      const largeCal = this.newLargeCal === "" ? meal.calories_large : this.newLargeCal
      const mealShow = this.mealShow
      const updateParams = {
        id,
        name,
        ingredients,
        smallPrice,
        largePrice,
        smallCal,
        largeCal,
        mealShow
      }
      // console.log(updateParams)

      axios
        .put("/api/update", updateParams)
        .then(function(response) {
          console.log( response);
        })
        .then(()=>{
          
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
};
</script>

<style></style>
