import Vue from 'vue'
import Vuex from 'vuex'
import charts from './modules/Charts'
import inputForm from './modules/InputForm'
import metadata from './modules/Metadata'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: []
  },
  mutations: {
    insertError(state, payload) {
      state.errors.push(payload)
    },
    clearError(state) {
      state.errors = []
    }
  },
  modules: { charts, inputForm, metadata }
})
