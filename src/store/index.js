import Vue from 'vue'
import Vuex from 'vuex'
// import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: localStorage.getItem('username'),
  },
  getters: {
    getUserName: (state) =>{
      return state.userName
    },
  },
  mutations: {
    SET_USER_NAME(state, name){
      state.userName = name
  },
  },
  actions: {
    setUserName({state}, name){
      localStorage.setItem("username", name)
      state.userName = name

    }

  },
  modules: {
  }
})
