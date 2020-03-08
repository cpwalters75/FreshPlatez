<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-img contain :src="require('../assets/images/' + meal.image_name)" :alt="mealImage" height="200px" width= "344px"> </v-img>

    <v-card-title>
      {{meal.short_Description}}
      <v-btn @click="show = !show" fab dark small color="primary " bottom right absolute>
        <v-icon>{{ show ? "mdi-minus" : "mdi-plus" }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>{{meal.ingredients}}</v-card-subtitle>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-actions>
          <v-col col="4" text-align="center">
            <v-select :items="pricing" label="Size/Price(ea)" dense solo></v-select>
            <v-select :items="qty" label="Quantity" dense solo></v-select>
            <div icon @click="overlay = !overlay">
              <v-btn outlined color="success">
                Add to Order
                <v-icon class="ml-2">mdi-cart</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-card-actions>
      </div>
    </v-expand-transition>
    <v-overlay :absolute="absolute" :value="overlay">
      <v-btn color="success" @click="overlay= !overlay; show= !show">
        Order Updated!
        <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-overlay>
  </v-card>
</template>

<script>

export default {
  name: "MealCard",
  props: ["meal"],
  data: () => ({
    show: false,
    absolute: true,
    overlay: false,
    qty: [1, 2, 3, 4, 5, 6, 7],
    pricing: ["Small.....$7.50", "Large.....$12.00"]
  }),
  method: {
    // pricing: function() {},
    
  },
  // computed: {
  //   mealImage(meal) {
  //     console.log()
  //     const filename = meal.image_name
  //     return require(`../assets/images/${filename}`)
  //   }

  // }
};
</script>

<style>
</style>