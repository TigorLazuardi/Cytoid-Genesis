import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    charts: {
      easy: {
        use: false,
        difficulty: null,
        customName: null,
        file: null,
        musicOverride: null,
        customStoryboard: null,
      },
      hard: {
        use: false,
        difficulty: null,
        customName: null,
        file: null,
        musicOverride: null,
        customStoryboard: null,
      },
      EX: {
        use: false,
        difficulty: null,
        customName: null,
        file: null,
        musicOverride: null,
        customStoryboard: null,
      }
    },
    errors: []
  },
  mutations: {
    // ! Charts

    // * Easy

    toggleEasy(state) {
      state.charts.easy.use = !state.charts.easy.use
    },
    setDifficultyEasy(state, payload) {
      state.charts.easy.difficulty = payload
    },
    setChartEasy(state, payload) {
      state.charts.easy.file = payload
    },
    setMusicEasy(state, payload) {
      state.charts.easy.musicOverride = payload
    },
    setCustomStoryboardEasy(state, payload) {
      state.charts.easy.customStoryboard = payload
    },
    setCustomNameEasy(state, payload) {
      state.charts.easy.customName = payload
    },

    // * Hard

    toggleHard(state) {
      state.charts.hard.use = !state.charts.hard.use
    },
    setDifficultyHard(state, payload) {
      state.charts.hard.difficulty = payload
    },
    setChartHard(state, payload) {
      state.charts.hard.file = payload
    },
    setMusicHard(state, payload) {
      state.charts.hard.musicOverride = payload
    },
    setCustomStoryboardHard(state, payload) {
      state.charts.hard.customStoryboard = payload
    },
    setCustomNameHard(state, payload) {
      state.charts.hard.customName = payload
    },

    // * EX

    toggleEX(state) {
      state.charts.EX.use = !state.charts.EX.use
    },
    setDifficultyEX(state, payload) {
      state.charts.EX.difficulty = payload
    },
    setChartEX(state, payload) {
      state.charts.EX.file = payload
    },
    setMusicEX(state, payload) {
      state.charts.EX.musicOverride = payload
    },
    setCustomStoryboardEX(state, payload) {
      state.charts.EX.customStoryboard = payload
    },
    setCustomNameEX(state, payload) {
      state.charts.EX.customName = payload
    },

    // ! Errors

    insertError(state, payload) {
      state.errors.push(payload)
    },
    clearError(state) {
      state.errors = []
    }
  },
})
