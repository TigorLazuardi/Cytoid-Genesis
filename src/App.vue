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
    setInput ({ music, musicPreview, background, storyboard }) {
      this.music = music
      this.musicPreview = musicPreview
      this.background = background
      this.storyboard = storyboard
    }
  }
}
</script>
