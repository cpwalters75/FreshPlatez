<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-img :src="meal.imageSrc" height="200px"></v-img>

    <v-card-title>
      {{meal.title}}
      <v-btn @click="show = !show" fab dark small color="primary " bottom right absolute>
        <v-icon>{{ show ? "mdi-minus" : "mdi-plus" }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>{{meal.shortDescription}}</v-card-subtitle>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-actions>
          <v-col col="4" text-align="center">
            <v-select :items="meal.prices" label="Size/Price(ea)" dense solo></v-select>
            <v-select :items="meal.qty" label="Quantity" dense solo></v-select>
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
    overlay: false
  })
};
</script>

<style>
</style>