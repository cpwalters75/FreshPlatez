<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-img
      :src="require('../assets/images/' + item.image_name)"
      :alt="mealImage"
      height="200px"
      width="344px"
    />
    <v-card-title>{{item.title}}</v-card-title>
    <v-card-subtitle>{{item.shortDescription}}</v-card-subtitle>
    <v-divider></v-divider>
    <v-card-actions>
      <v-container>
        <v-row dense>
          <v-col col="6" text-align="left">
            <v-select :items="pricing" label="Size/Price(ea)" dense solo></v-select>
          </v-col>
          <v-col col="6" text-align="right">
            <v-select :items="qty" label="Quantity" dense solo></v-select>
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
            <div icon @click="overlay = !overlay; update= true">
              <v-btn color="primary" outlined>Update</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
    <v-overlay :absolute="absolute" :value="overlay" :update="update">
      <div v-if="update">
        <v-btn color="primary" @click="overlay= !overlay; show= !show">
          Item Updated!
          <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn color="error" @click="overlay= !overlay; show= !show">
          Remove Item?
          <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      </div>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  name: "MealCard",
  props: ["item"],
  data: () => ({
    absolute: true,
    overlay: false,
    update: false,
    qty: [1, 2, 3, 4, 5, 6, 7],
    pricing: ["Small.....$7.50", "Large.....$12.00"]
  }),
  method: {}
};
</script>

<style>
/* Temp fix for word wrapping in cards breaking words https://github.com/vuetifyjs/vuetify/issues/9130*/
/* v-card-subtitle,
v-card-title {
  white-space: normal;
  text-overflow: ellipsis;
} */
</style>