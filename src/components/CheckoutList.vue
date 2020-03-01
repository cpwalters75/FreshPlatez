<template>
  <v-card max-width="1000" outlined raised color="grey lighten-5">
    <!-- see https://www.youtube.com/watch?v=poJojbsZYNQ for set up -->
    <h2 class="display-2 mb-4">Basket</h2>
    <v-container>
      <v-list fluid color="grey lighten-5"
        >v-list
        <!-- do a for loop of the template to get items in cart -->
        <template>
          <v-list-tile
            >tile
            <v-list-tile-content>
              <v-list-tile-title>title</v-list-tile-title>
              <v-list-tile-description>description</v-list-tile-description>
            </v-list-tile-content>
            <v-list-tile>
              price
            </v-list-tile>
            <v-list-tile-action>
              <v-text-field>
                size
              </v-text-field>
            </v-list-tile-action>
            <v-list-tile>
              total
            </v-list-tile>
          </v-list-tile>

          <!-- puts a line between items, need to put in logic to check if last one and if so put a line at end -->
          <v-divider> </v-divider>
        </template>
      </v-list>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "CheckoutList",
  components: {},
  data: () => {}
};
</script>
