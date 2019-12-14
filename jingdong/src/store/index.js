import Vue from 'vue'
import Vuex from 'vuex'
// import miao from '@api/home'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phd:''
  },
  mutations: {
    setphd(state,option){
      state.phd = option.data;
    }
  },
  actions: {
  },
  modules: {
  }
})
