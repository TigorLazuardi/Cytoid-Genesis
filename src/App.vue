<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <!-- Title -->
        <v-col cols="12">
          <h1>Cytoid Level Generator</h1>
        </v-col>

        <!-- Input -->
        <InputForm />
        <Charts />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import InputForm from './components/InputForm'
import Charts from './components/Charts'
export default {
  name: 'App',
  components: {
    InputForm,
    Charts
  },
  data: () => ({}),
  methods: {}
}
</script>
