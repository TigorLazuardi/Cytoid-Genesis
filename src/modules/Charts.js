export default {
  namespaced: true,
  state: {
    easy: {
      use: false,
      difficulty: null,
      music: null,
      customStoryboard: null,
      customName: null
    },
    hard: {
      use: false,
      difficulty: null,
      music: null,
      customStoryboard: null,
      customName: null
    },
    EX: {
      use: false,
      difficulty: null,
      music: null,
      customStoryboard: null,
      customName: null
    }
  },
  mutations: {
    // ! Easy

    toggleEasy(state) {
      state.easy.use = !state.easy.use
    },
    setDifficultyEasy(state, payload) {
      state.easy.difficulty = payload
    },
    setMusicEasy(state, payload) {
      state.easy.music = payload
    },
    setCustomStoryboardEasy(state, payload) {
      state.easy.customStoryboard = payload
    },
    setCustomNameEasy(state, payload) {
      state.easy.customName = payload
    },

    // ! Hard

    toggleHard(state) {
      state.hard.use = !state.hard.use
    },
    setDifficultyHard(state, payload) {
      state.hard.difficulty = payload
    },
    setMusicHard(state, payload) {
      state.hard.music = payload
    },
    setCustomStoryboardHard(state, payload) {
      state.hard.customStoryboard = payload
    },
    setCustomNameHard(state, payload) {
      state.hard.customName = payload
    },

    // ! Extreme

    toggleExtreme(state) {
      state.EX.use = !state.EX.use
    },
    setDifficultyExtreme(state, payload) {
      state.EX.difficulty = payload
    },
    setMusicExtreme(state, payload) {
      state.EX.music = payload
    },
    setCustomStoryboardExtreme(state, payload) {
      state.EX.customStoryboard = payload
    },
    setCustomNameExtreme(state, payload) {
      state.EX.customName = payload
    }
  },
  actions: {

  }
}
