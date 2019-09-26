import Vue from 'vue'
import Vuex from 'vuex'
import Charts from './modules/Charts'
import InputForm from './modules/InputForm'
import Metadata from './modules/Metadata'

Vue.use(Vuex)

export default new Vuex.Store({ modules: { Charts, InputForm, Metadata } })
