<template>
  <v-form enctype="multipart/form-data">
    <div v-if="message" :class="`message ${error ? 'error' : 'success'}`">
      <div class="message-body">{{ message }}</div>
    </div>
    <div
      class="base-image-input"
      :style="{ 'background-image': `url(${imageData})` }"
      @click="chooseImage"
    >
      <span v-if="!imageData" class="placeholder">
        Choose an Image (required)
      </span>
      <input
        class="file-input"
        ref="fileInput"
        type="file"
        @input="onSelectFile"
      />
    </div>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    imageData: null,
    error: false,
    message: "",
    formData: "",
    
  }),

  methods: {
    chooseImage() {
      this.$refs.fileInput.click();
    },



    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
      const MAX_SIZE = 2000000;
      const tooLarge = input.size > MAX_SIZE;
      const fileName= files[0].name
      console.log(fileName)
      
        

      if (allowedTypes.includes(files[0].type) && !tooLarge) {
        this.error = false;
        this.message = "";
        this.$emit("fileName", fileName)

        if (files && files[0]) {
          const reader = new FileReader();
          reader.onload = e => {
            this.imageData = e.target.result;
            
          };
          reader.readAsDataURL(files[0]);
          this.$emit("input", files[0]);
          
          const sendFile = async () => {
            const input = this.$refs.fileInput;
            const files = input.files;
            const file = files[0];
            const formData = new FormData();
            formData.append("file", file);
            return formData
            }
          sendFile()
            .then((formData) => {
                axios.post("/api/upload", formData);
                this.error = false;
                this.uploadedFile = this.file
            })
        }
      } else {
        this.error = true;
        this.message = tooLarge
          ? "Too large. Max size is 2MB"
          : "Only images are allowed";
        this.file = "";
      }
    },

  }
};
</script>

<style scoped>
.base-image-input {
  display: block;
  width: 340px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #e0e0e0;
}
.file-input {
  display: none;
}
</style>
