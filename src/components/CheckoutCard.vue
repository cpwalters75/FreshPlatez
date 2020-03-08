<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="mx-auto outlined">
        <v-list-item two-line>
          <v-list-item-avatar tile size="100">
            <v-img :src="item.imageSrc" class="fill-height" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.shortDescription }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
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
</style>