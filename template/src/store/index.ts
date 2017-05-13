import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    count: 0,
    msg: 'Welcome to Your Vue.js App'
  },
  mutations: {
    increment (state: any) {
      state.count++
    }
  }
})
