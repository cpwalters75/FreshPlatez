<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="mx-auto outlined word-break">
        <v-container class="pa-0">
          <v-row>
            <v-col cols="3" class="pa-0">
              <v-img :src="require('../assets/images/' + item.image_name)" height="344px" />
            </v-col>
            <v-col cols="7">
              <v-row>
                <v-col cols="12">
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle>{{ item.shortDescription }}</v-card-subtitle>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col col="6" text-align="left">
                  <v-select :items="pricing" label="Size/Price(ea)" dense solo></v-select>
                </v-col>
                <v-col col="6" text-align="right">
                  <v-select :items="qty" label="Quantity" dense solo></v-select>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2">
              <v-row>
                <v-col col="12" justify="right">
                  <div icon>
                    <div>
                      <v-btn color="primary" outlined large absolute right class="mb-8">Update</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col col="12" class="r-0" justify="right">
                  <div icon>
                    <div>
                      <v-btn
                        color="error"
                        outlined
                        large
                        absolute
                        right
                        class="mt-8"
                        @click="$emit('remove-cart-item',item.id)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
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
img {
  object-fit: fill;
}
</style>