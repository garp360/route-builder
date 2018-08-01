import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRoute: {}
  },
  mutations: {
    activate ( state, route ) {
      state.activeRoute = route;
    }
  },
  actions: {

  }
})
