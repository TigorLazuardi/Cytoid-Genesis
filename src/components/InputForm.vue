<template>
  <v-col cols="12">
    <h3 class="headline">Input</h3>
    <p class="caption font-italic">*Outlined inputs are mandatory.</p>
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
            @change="_setMusic"
            :rules="rule"
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
            @change="_setPreview"
            :rules="rule"
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
            @change="_setBackground"
            :rules="rule"
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
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Input-Form',
  data: function () {
    return {
      rule: [v => (v != '' && v != null) || 'Please fill out this field']
    }
  },
  methods: {
    ...mapMutations([
      'setMusic',
      'setPreview',
      'setBackground',
      'setStoryboard'
    ]),
    _setMusic (val) {
      if (val) this.setMusic(val.path)
      else this.setMusic(null)
    },
    _setPreview (val) {
      if (val) this.setPreview(val.path)
      else this.setPreview(null)
    },
    _setBackground (val) {
      if (val) this.setBackground(val.path)
      else this.setBackground(null)
    },
    _setStoryboard (val) {
      if (val) this.setStoryboard(val.path)
      else this.setStoryboard(null)
    }
  },
  computed: {}
}
</script>

<style>
</style>
