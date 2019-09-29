
<template>
  <v-app>
    <v-form ref="form">
      <v-container fluid>
        <v-row>
          <!-- Title -->
          <v-col cols="12">
            <h1>Cytoid Level Generator</h1>
          </v-col>

          <!-- User Input -->
          <InputForm />
          <Charts />
          <Metadata />
          <v-col v-if="errors.length > 0" cols="12">
            <v-card min-height="300px">
              <h3 class="mb-3">Error(s) Found</h3>
              <ol>
                <li v-for="(error, i) in errors" :key="i">{{error}}</li>
              </ol>
            </v-card>
          </v-col>
          <v-col cols="12" class="d-flex justify-center mb-12">
            <v-btn class="indigo" block @click="submit">Generate</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import InputForm from './components/InputForm'
import Charts from './components/Charts'
import Metadata from './components/Metadata'
// import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    InputForm,
    Charts,
    Metadata
  },
  methods: {
    submit () {
      this.$store.commit('clearError')

      if (this.$refs.form.validate()) console.log('Validate Runs Well')
      else this.$store.commit('insertError', 'Validations Failed')
    }
  },
  computed: {
    errors () {
      return this.$store.state.errors
    }
  }
}
</script>

<style>
</style>
