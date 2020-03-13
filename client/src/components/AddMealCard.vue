<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-card-title>Add a new meal</v-card-title>
    
    <ImageInput v-model="imageFile" 
      v-on:input="updateFile($event)"
     
      />
  <!-- </div>
      <v-img :src="uploadedFile" height="200px">Upload Picture</v-img>

      :src="require('../assets/images/' + meal.image_name)
    </v-form> -->

    <v-card-title>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
        clearable= true
      ></v-text-field>
    </v-card-title>

    <v-card-subtitle>
      <v-textarea
        v-model="shortDescription"
        :rules="shortDescriptionRules"
        label="Ingredients"
        required
        rows="1"
        clearable= true
        auto-grow= true
      >
        <template v-slot:label>
          <div>Ingredients</div>
        </template>
      </v-textarea>
    </v-card-subtitle>

    <v-divider></v-divider>

    <v-card-actions>
      <v-col col="4" text-align="center">
        <v-text-field
          v-model="smallPrice"
          :rules="smallPriceRules"
          label="Price for Small"
          prefix="$"
          type="number"
          clearable= true
        ></v-text-field>
        <v-text-field
          v-model="largePrice"
          :rules="largePriceRules"
          label="Price for Large"
          prefix="$"
          type="number"
          clearable= true
        ></v-text-field>
        <v-text-field
          v-model="smallCal"
          :rules="smallCalRules"
          label="Calorie Range for Small"
          type="number"
          clearable= true
        ></v-text-field>
        <v-text-field
          v-model="largeCal"
          :rules="largeCalRules"
          label="Calorie Range for Large"
          type="number"
          clearable= true
        ></v-text-field>

        <div icon @click="saveMeal(), overlay = !overlay">
          <v-btn class="large" depressed color="success">Save</v-btn>
        </div>
      
      </v-col>
    </v-card-actions>

    <v-overlay :absolute="absolute" :value="overlay">
      <v-btn
        color="success"
        @click="
          overlay = !overlay;
          show = !show;
        "
      >
        Meal Added!
        <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-overlay>
  </v-card>
</template>

<script>
import axios from "axios";
import ImageInput from "./ImageInput"

export default {
  components: { ImageInput },
  name: "AddMealCard",
  props: ["newMeal"],
  data: () => ({
    show: true,
    absolute: true,
    overlay: false,
    valid: false,
    name: "",
    shortDescription: "",
    nameRules: [v => !!v || "Name is required"],
    shortDescriptionRules: [v => !!v || "Short Description is required"],
    smallPriceRules: [v => !!v || "Small Price is required"],
    largePriceRules: [v => !!v || "Large Price is required"],
    smallCalRules: [v => !!v || "Small Calories is required"],
    largeCalRules: [v => !!v || "Large Calories is required"],
    file: "",
    message: "",
    error: false,
    imageFile: "",
    smallPrice: "",
    largePrice: "",
    smallCal: "",
    largeCal: "",
    imageName: "",
  }),

  methods: {

    saveMeal(){
      const name = this.name
      const ingredients = this.shortDescription
      const smallPrice = this.smallPrice
      const largePrice = this.largePrice
      const smallCal = this.smallCal
      const largeCal = this.largeCal
      const image = this.imageName
      
      const saveMealParams = {
        name,
        ingredients,
        smallPrice,
        largePrice,
        smallCal,
        largeCal,
        image
      }
      
      axios
        .post("/api/create", saveMealParams)
        .then(function(response) {
          console.log(response);
        })
        .then(() => {
          
        })
        .catch(function(error) {
          console.log(error);
        });
    },


    updateFile(file){
      this.file= `./images/${file.name}`
      this.imageName= file.name
      
    },

  
  }
};
</script>

<style>
img {
  width: 100%;
  height: 100%;
}
</style>
