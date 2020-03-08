<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="mx-auto outlined word-break">
        <v-row>
          <v-col cols="3" class="pa-0">
            <v-img
              :src="require('../assets/images/' + item.image_name)"
              :alt="mealImage"
              height="200px"
              width="344px"
            />
          </v-col>
          <v-col cols="9">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.shortDescription }}</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CheckoutCard",
  props: ["item"]
};
</script>

<style>
/* Temp fix for word wrapping in cards breaking words https://github.com/vuetifyjs/vuetify/issues/9130*/
v-card-subtitle,
v-card-title {
  word-break: normal; /* maybe !important  */
}
</style>