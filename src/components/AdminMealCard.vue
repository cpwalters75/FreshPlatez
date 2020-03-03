<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-img :src="meal.imageSrc" height="200px"></v-img>

    <v-card-title>
      <v-text-field v-model="name" :rules="nameRules" label="Name" required clearable="true"></v-text-field>
      <v-btn @click="show = !show" fab dark small color="primary " bottom right absolute>
        <v-icon>{{ show ? "mdi-minus" : "mdi-plus" }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>
      <v-textarea
        :value="this.$props.meal.shortDescription"
        :rules="shortDescriptionRules"
        label="Short Description"
        required
        clearable="true"
        auto-grow="true"
        autofocus="true"
      >
        <template v-slot:label>
          <div>Short Description</div>
        </template>
      </v-textarea>
    </v-card-subtitle>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-actions>
          <v-col col="4" text-align="center">
            <v-select :items="meal.prices" label="Size/Price(ea)" dense solo></v-select>
            <v-select :items="meal.qty" label="Quantity" dense solo></v-select>
            <div icon @click="overlay = !overlay">
              <v-btn class="large" depressed color="success">Save</v-btn>
            </div>
            <v-btn class="small red darken-2">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-card-actions>
      </div>
    </v-expand-transition>
    <v-overlay :absolute="absolute" :value="overlay">
      <v-btn color="success" @click="overlay= !overlay; show= !show">
        Meal Updated!
        <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  name: "AdminMealCard",
  props: ["meal"],
  data: () => ({
    show: true,
    absolute: true,
    overlay: false,
    valid: false,
    name: ``,
    shortDescription: `if soething starts in the short description does it transalte to the page`,
    nameRules: [v => !!v || "Name is required"],
    shortDescriptionRules: [v => !!v || "Short Description is required"]
  })
};
</script>

<style>
</style>