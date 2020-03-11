<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-img :src="require('../assets/images/' + item.image_name)" height="200px" width="344px" />
    <v-card-title>{{item.short_Description}}</v-card-title>
    <v-card-subtitle>{{item.ingredients}}</v-card-subtitle>
    <v-divider></v-divider>
    <v-card-actions>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-select
              :items="size"
              v-model="currentSize"
              label="Size"
              dense
              solo
              @change="calcPrice();needSave= true"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="qty"
              v-model="currentQty"
              label="Quantity"
              dense
              solo
              @change="calcPrice();needSave= true"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field disabled v-model="itemTotal" label="Item Total" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col col="6" class="r-0">
            <div icon @click="overlay = !overlay; update= false">
              <v-btn color="error" outlined>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col col="6" text-align="left">
            <div icon @click="overlay = !overlay; update= true; updateItem(); needSave= false">
              <div v-if="needSave">
                <v-btn color="primary" raised>Update</v-btn>
              </div>
              <div v-else>
                <v-btn color="primary" outlined>Update</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
    <v-overlay :absolute="absolute" :value="overlay" :update="update">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div v-if="update">
              <v-btn color="primary" @click="overlay= !overlay; show= !show">
                Item Updated!
                <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
              </v-btn>
            </div>
            <div v-else>
              <v-btn
                color="error"
                @click="overlay= !overlay; show= !show; $emit('remove-cart-item',item.id); $emit('update-order-total')"
              >
                Remove Item?
                <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
              </v-btn>
              <v-btn color="primary" @click="overlay= !overlay; show= !show">
                Nevermind!
                <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  name: "MobileCheckoutCard",
  props: ["item"],
  data: () => ({
    absolute: true,
    overlay: false,
    show: false,
    update: false,
    needSave: false,
    qty: [1, 2, 3, 4, 5, 6, 7],
    currentQty: 0,
    size: ["Small", "Large"],
    currentSize: "",
    itemPrice: 0,
    currentTotal: 0,
    itemTotal: ""
  }),
  created: function() {
    this.currentQty = this.item.quantity;
    this.currentSize = this.item.meal_size;
    this.calcPrice();
  },
  methods: {
    calcPrice: function() {
      if (this.currentSize === "Small") {
        this.itemPrice = this.item.price_small;
      } else if (this.currentSize === "Large") {
        this.itemPrice = this.item.price_large;
      }
      this.currentTotal = this.itemPrice * this.currentQty;
      this.itemTotal = "$" + this.currentTotal;
    },
    updateItem: function() {
      const updatedItem = {
        id: this.item.id,
        MealId: this.item.id,
        short_Description: this.item.short_Description,
        ingredients: this.item.ingredients,
        quantity: this.currentQty,
        meal_size: this.currentSize,
        price_small: this.item.price_small,
        price_large: this.item.price_large,
        image_name: this.item.image_name
      };
      this.$emit("update-cart-item", updatedItem);
      this.$emit("update-order-total");
    }
  }
};
</script>

<style>
</style>