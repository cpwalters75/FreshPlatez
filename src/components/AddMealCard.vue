<template>
  <v-card elevation="6" class="mx-auto" max-width="344">
    <v-form enctype="multipart/form-data">
      <div v-if="message" :class="`message ${error ? 'error' : 'success'}`">
        <div class="message-body">{{ message }}</div>
      </div>
      <div class="field">
        <v-btn large center fab @click="sendFile"
          ><v-icon x-large>mdi-camera-plus</v-icon>
        </v-btn>
      </div>
      <div class="pl-2 field">
        <label for="file" class="label"></label>
        <input type="file" ref="file" @change="selectFile" />
      </div>
      <v-img :src="uploadedFile" height="200px"></v-img>
    </v-form>

    <v-card-title>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
        clearable= true
      ></v-text-field>
      <v-btn
        @click="show = !show"
        fab
        dark
        small
        color="primary "
        bottom
        right
        absolute
      >
        <v-icon>{{ show ? "mdi-minus" : "mdi-plus" }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>
      <v-textarea
        v-model="shortDescription"
        :value="this.$props.newMeal.shortDescription"
        :rules="shortDescriptionRules"
        label="Short Description"
        required
        clearable= true
        auto-grow= true
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
            <v-select
              :items="newMeal.prices"
              label="Size/Price(ea)"
              dense
              solo
            ></v-select>
            <v-select
              :items="newMeal.qty"
              label="Quantity"
              dense
              solo
            ></v-select>
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
      <v-btn
        color="success"
        @click="
          overlay = !overlay;
          show = !show;
        "
      >
        Meal Added!
        <v-icon class="ml-2">mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-overlay>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "AddMealCard",
  props: ["newMeal"],
  data: () => ({
    show: true,
    absolute: true,
    overlay: false,
    valid: false,
    name: "",
    shortDescription: "",
    nameRules: [v => !!v || "Name is required"],
    shortDescriptionRules: [v => !!v || "Short Description is required"],
    file: "",
    message: "",
    error: false,
    uploadedFile: "",
  }),

  methods: {
    selectFile() {
        
      const file = this.$refs.file.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const MAX_SIZE = 2000000;
      const tooLarge = file.size > MAX_SIZE

      if (allowedTypes.includes(file.type) && !tooLarge) {
        this.file = file;
        this.error = false;
        this.message = "";
      } else {
          this.error = true;
          this.message = tooLarge ? "Too large. Max size is 2MB" :"Only images are allowed"
      }
    },

    async sendFile() {
    
      const file = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append("file", file);
        
      try {
        const res= await axios.post('/api/upload', formData);
        this.message = "File has been uploaded";
        this.uploadedFile.push(res.data.file);
        console.log(res.data.file)
        this.error = false;
      } catch (err) {
        this.message = err.response.data.error;
        this.error = true;
      }
    }
  }
};
</script>

<style></style>
