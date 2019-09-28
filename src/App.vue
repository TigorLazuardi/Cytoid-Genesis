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
        <Metadata />
        <v-col v-if="$store.state.errors.length > 0" cols="12">
          <v-card min-height="300px">
            <ol>
              <li v-for="(error, i) in $store.state.errors" :key="i">{{error[i]}}</li>
            </ol>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-center mb-12">
          <v-btn class="indigo" block>Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import InputForm from './components/InputForm'
import Charts from './components/Charts'
import Metadata from './components/Metadata'
export default {
  name: 'App',
  components: {
    InputForm,
    Charts,
    Metadata
  }
}
</script>

<style>
</style>
