export default {
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
    extreme: {
      use: false,
      difficulty: null,
      music: null,
      customStoryboard: null,
      customName: null
    }
  },
  mutations: {
    // ! Easy

    toggleEasy (state) {
      state.easy.use = !state.easy.use
    },
    setDifficultyEasy (state, payload) {
      state.easy.difficulty = payload
    },
    setMusicEasy (state, payload) {
      state.easy.music = payload
    },
    setCustomStoryboardEasy (state, payload) {
      state.easy.customStoryboard = payload
    },
    setCustomNameEasy (state, payload) {
      state.easy.customName = payload
    },

    // ! Hard

    toggleHard (state) {
      state.hard.use = !state.hard.use
    },
    setDifficultyHard (state, payload) {
      state.hard.difficulty = payload
    },
    setMusicHard (state, payload) {
      state.hard.music = payload
    },
    setCustomStoryboardHard (state, payload) {
      state.hard.customStoryboard = payload
    },
    setCustomNameHard (state, payload) {
      state.hard.customName = payload
    },

    // ! Extreme

    toggleExtreme (state) {
      state.extreme.use = !state.extreme.use
    },
    setDifficultyExtreme (state, payload) {
      state.extreme.difficulty = payload
    },
    setMusicExtreme (state, payload) {
      state.extreme.music = payload
    },
    setCustomStoryboardExtreme (state, payload) {
      state.extreme.customStoryboard = payload
    },
    setCustomNameExtreme (state, payload) {
      state.extreme.customName = payload
    }
  },
  actions: {

  }
}
