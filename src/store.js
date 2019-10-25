import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollOff: false,
    isMobile: false,
    viewLoading: true,
  },
  mutations: {
    SET_MOBILE(state, type) {
      state.isMobile = type
    },
    SET_SCROLLOFF(state, type) {
      state.scrollOff = type
    },
    SET_VIEW_LOADING(state, type) {
      state.viewLoading = type
    },
  },
  actions: {},
})
