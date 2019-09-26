export default {
  state: {
    music: null,
    musicPreview: null,
    background: null,
    storyboard: null
  },
  mutations: {
    setMusic (state, payload) {
      state.music = payload
    },
    setMusicPreview (state, payload) {
      state.musicPreview = payload
    },
    setBackground (state, payload) {
      state.background = payload
    },
    setStoryboard (state, payload) {
      state.background = payload
    }
  },
  actions: {

  }
}
