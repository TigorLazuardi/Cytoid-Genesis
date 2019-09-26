<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <!-- Title -->
        <v-col cols="12">
          <h1>Cytoid Genesis</h1>
        </v-col>

        <!-- Input -->
        <InputForm @setInput="setInput" />

      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import InputForm from './components/InputForm'
export default {
  name: 'App',
  components: {
    InputForm
  },
  data: () => ({
    music: '',
    musicPreview: '',
    background: '',
    storyboard: ''
  }),
  methods: {
    setMusic (val) {
      this.music = val
    },
    setMusicPreview (val) {
      this.music = val
    },
    setBackground (val) {
      this.music = val
    },
    setStoryboard (val) {
      this.music = val
    }
  }
}
</script>
