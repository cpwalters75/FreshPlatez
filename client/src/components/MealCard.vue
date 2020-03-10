<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-img :src="require('../assets/images/' + meal.image_name)" height="200px" width="344px"></v-img>

    <v-card-title>
      {{meal.short_Description}}
      <v-btn @click="show = !show" fab dark small color="primary " bottom left absolute>
        <v-icon>{{ show ? "mdi-minus" : "mdi-plus" }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>{{meal.ingredients}}</v-card-subtitle>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-actions>
          <v-col col="4" text-align="center">
            <v-select :items="pricing" label="Size/Price(ea)" dense solo @change="size = size"></v-select>
            <v-select :items="qty" label="Quantity" dense solo @change="qty= qty"></v-select>
            <!-- <div icon @click="overlay = !overlay; addItemToCart(this.meal)">  -->
            <div icon @click="overlay = !overlay; $emit('add-cart-item',meal)">
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
    pricing: ["Small.....$7.50", "Large.....$12.00"],
    currentSize: ""
  }),
  method: {
    // addItemToCart(meal) {
    //   const item = {
    //     short_Description: this.meal.short_Description,
    //     qty: this.qty,
    //     size: this.size
    //   };
  }
};
</script>

<style>
<<<<<<< HEAD:src/components/MealCard.vue

=======
>>>>>>> f5b6fef62e404caed3baa34a60b7a0eedb134f20:client/src/components/MealCard.vue
img {
  object-fit: cover;

<<<<<<< HEAD:src/components/MealCard.vue
/* Temp fix for word wrapping in cards breaking words https://github.com/vuetifyjs/vuetify/issues/9130
=======
  /* Temp fix for word wrapping in cards breaking words https://github.com/vuetifyjs/vuetify/issues/9130
>>>>>>> f5b6fef62e404caed3baa34a60b7a0eedb134f20:client/src/components/MealCard.vue
v-card-subtitle,
v-card-title {
  white-space: normal;
  text-overflow: ellipsis;
} */
<<<<<<< HEAD:src/components/MealCard.vue


=======
>>>>>>> f5b6fef62e404caed3baa34a60b7a0eedb134f20:client/src/components/MealCard.vue
}
</style>