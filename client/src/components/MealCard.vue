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
          <v-container text-align="center">
            <v-row>
              <v-col cols="6">
                <v-select
                  :items="size"
                  v-model="meal_size"
                  label="Size"
                  dense
                  solo
                  @change="calcPrice()"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  :items="qty"
                  v-model="currentQty"
                  label="Quantity"
                  dense
                  solo
                  @change="calcPrice()"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field disabled v-model="itemTotal" label="Item Total" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <div icon @click="overlay = !overlay; addToCart()">
                  <v-btn outlined color="success" justify="center">
                    Add to Order
                    <v-icon class="ml-2">mdi-cart</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
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
    currentQty: 1,
    size: ["Small", "Large"],
    meal_size: "Small",
    itemPrice: 0,
    currentTotal: 0,
    itemTotal: "This is the item total",
    id: 0
  }),
  created: function() {
    this.calcPrice();
  },
  methods: {
    addToCart: function() {
      this.id++;
      const newItem = {
        id: this.id,
        MealId: this.meal.id,
        quantity: this.currentQty
      };
      this.$emit("add-cart-item", newItem);
    },
    calcPrice: function() {
      if (this.meal_size === "Small") {
        this.itemPrice = this.meal.price_small;
      } else if (this.meal_size === "Large") {
        this.itemPrice = this.meal.price_large;
      }
      this.currentTotal = this.itemPrice * this.currentQty;
      this.itemTotal = "The new item total is $" + this.currentTotal;
    }
  }
};
</script>

<style>
img {
  object-fit: cover;

  /* Temp fix for word wrapping in cards breaking words https://github.com/vuetifyjs/vuetify/issues/9130
v-card-subtitle,
v-card-title {
  white-space: normal;
  text-overflow: ellipsis;
} */
}
</style>