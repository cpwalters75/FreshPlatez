<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="mx-auto outlined word-break">
        <v-row>
          <v-col cols="3">
            <v-img :src="item.imageSrc" />
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
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>