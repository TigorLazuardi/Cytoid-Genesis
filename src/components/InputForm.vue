<template>
  <v-col cols="12">
    <v-card>
      <v-card-title class="indigo">Input</v-card-title>
      <v-divider></v-divider>
      <v-container fluid>
        <v-row>
          <v-col lg="3" md="6" sm="12">
            <v-file-input
              prepend-icon="mdi-music"
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
              prepend-icon="mdi-music"
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
              outlined
              messages="Optional. This storyboard is used for all music difficulty.."
            ></v-file-input>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
export default {}
</script>

<style>
</style>
