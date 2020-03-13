<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-img
      :src="require('../assets/images/' + meal.image_name)"
      alt="meal.short_Description"
      height="200px"
      width="344px"
      v-if="picShow"
    >
    </v-img>
    <div v-if="picUploadIcon" class="field">
      <v-btn class="mx-4 my-4" large center fab @click="picUploadIcon = !picUploadIcon, picAdd = true, picShow = false"
        ><v-icon x-large>mdi-upload</v-icon>
      </v-btn>
      Click to Change Picture
    </div>

    <div>
      <ImageInput v-model="fileName" v-if="picAdd" v-on:fileName="fileNamePic($event)"/>
    </div>

    <v-card-subtitle class="title">
      Current Title: {{ meal.short_Description }}

      <v-btn
        @click="(picUploadIcon = !picUploadIcon), (show = !show)"
        fab
        dark
        small
        color="primary"
        bottom
        right
        absolute
      >
        <v-icon>{{ show ? "mdi-minus" : "mdi-pencil" }}</v-icon>
      </v-btn>
    </v-card-subtitle>

    <v-expand-transition>
      <div v-show="show">
        <v-text-field
          class="ml-2"
          v-model="newName"
          label="New Name"
          required
          clearable= true
        ></v-text-field>
        <v-card-subtitle
          >Current Ingredients: {{ meal.ingredients }}
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
              clearable= true
            ></v-text-field>
            <v-text-field
              v-model="newLargePrice"
              label="New Price for Large"
              prefix="$"
              type="number"
              clearable= true
            ></v-text-field>
            <v-text-field
              v-model="newLargeCal"
              label="New Calorie Range for Large"
              type="number"
              clearable= true
            ></v-text-field>
            <v-text-field
              v-model="newSmallCal"
              label="New Calorie Range for Large"
              type="number"
              clearable= true
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

            <v-btn 
              @click="deleteOverlay = !deleteOverlay"
              class="ml-5 small red">
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
      <v-btn color="success" @click="refresh(), (overlay = !overlay)">
        Meal Updated!
        <v-icon class="ml-2" v-on:click="refresh"
          >mdi-checkbox-marked-circle</v-icon
        >
      </v-btn>
    </v-overlay>
    <v-overlay :absolute="absolute" :value="deleteOverlay">
      <v-btn color="red" @click="deleteMeal(meal), refresh()">
        Are you sure you want to delete?
        <v-icon class="ml-2"
          >mdi-cancel</v-icon
        >
      </v-btn>
    </v-overlay>
  </v-card>
</template>

<script>
import axios from "axios";
import ImageInput from "./ImageInput"

export default {
  name: "AdminMealCard",
  components: {
    ImageInput
  },
  props: ["meal"],
  data: () => ({
    show: false,
    absolute: true,
    overlay: false,
    deleteOverlay: false,
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
    mealShow: true,
    picShow: true,
    picAdd: false,
    picUploadIcon: false,
    imageFile: "",
    fileName: "",
    fileName2: ""
  }),

  methods: {
    refresh: () => {
      console.log("clicked it");
      window.location.reload();
    },

    fileNamePic(event){
      this.fileName2 = event
      console.log(event)
    },

    updateMeal(meal) {
      const id = meal.id;
      const name = this.newName === "" ? meal.short_Description : this.newName;
      const ingredients =
        this.newIngredients === "" ? meal.ingredients : this.newIngredients;
      const smallPrice =
        this.newSmallPrice === "" ? meal.price_small : this.newSmallPrice;
      const largePrice =
        this.newLargePrice === "" ? meal.price_large : this.newLargePrice;
      const smallCal =
        this.newSmallCal === "" ? meal.calories_small : this.newSmallCal;
      const largeCal =
        this.newLargeCal === "" ? meal.calories_large : this.newLargeCal;
      const mealShow = this.mealShow;
      const image = this.fileName2
      const updateParams = {
        id,
        name,
        ingredients,
        smallPrice,
        largePrice,
        smallCal,
        largeCal,
        image,
        mealShow
      };
      console.log(updateParams);

      axios
        .put("/api/update", updateParams)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    deleteMeal(meal) {
      const id = meal.id;
      const deleteID = {id}
      console.log("meal", deleteID)
      
      axios
        .post("api/delete", deleteID)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
