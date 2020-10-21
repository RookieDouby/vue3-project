import { createStore } from 'vuex'

export default createStore({
  state: {
    curIndex: 0,
  },
  mutations: {
    changeCityInfo(state, index) {
      state.curIndex = index;
    },
  },
  actions: {
  },
  modules: {
  }
})
