<template>
  <v-col cols="12">
    <h3 class="headline">Input</h3>
    <p class="caption font-italic">*Outlined inputs are mandatory to be filled.</p>
    <v-divider></v-divider>
    <v-container fluid>
      <v-row>
        <v-col lg="3" md="6" sm="12">
          <v-file-input
            prepend-icon="mdi-file-music"
            hint="*Required. Only accept mp3"
            label="Music"
            persistent-hint
            show-size
            outlined
            accept="audio/mpeg"
          ></v-file-input>
        </v-col>
        <v-col lg="3" md="6" sm="12">
          <v-file-input
            prepend-icon="mdi-file-music"
            hint="*Required. Only accept mp3"
            label="Music Preview"
            persistent-hint
            show-size
            outlined
            accept="audio/mpeg"
          ></v-file-input>
        </v-col>
        <v-col lg="3" md="6" sm="12">
          <v-file-input
            prepend-icon="mdi-image"
            hint="*Required. Accepts jpg and png"
            label="Background"
            persistent-hint
            show-size
            outlined
            accept="image/png, image/jpeg"
          ></v-file-input>
        </v-col>
        <v-col lg="3" md="6" sm="12">
          <v-file-input
            prepend-icon="mdi-json"
            label="Storyboard (Global)"
            show-size
            messages="Optional. This storyboard is used for all music difficulty."
          ></v-file-input>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>

<script>
export default {
  data: function () {
    return {
      music: '',
      musicPreview: '',
      background: '',
      storyboard: ''
    }
  }
}
</script>

<style>
</style>
