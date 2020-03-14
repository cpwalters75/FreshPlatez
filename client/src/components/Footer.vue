<template>
  <v-footer
    dark
    padless
    
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="black">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.link"
          class="mx-4"
          dark
          icon
          :href='icon.link'
           target="_blank"
        >
            <v-icon size="24px">{{ icon.image}}</v-icon>
          
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
      name: "Footer",
    data: () => ({
      icons: [
        {image: 'mdi-instagram', link: 'https://www.instagram.com/fresh_platez_kitchen/'}
      ],
    }),
  }
</script>

<style>

</style>