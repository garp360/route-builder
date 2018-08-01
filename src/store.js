import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRoute: {}
  },
  mutations: {
    activate ( state, route ) {
      if ( route && route.id ) {
        state.activeRoute = route;
      } else {
        state.activeRoute = {}
      }
    }
  },
  actions: {

  }
})
