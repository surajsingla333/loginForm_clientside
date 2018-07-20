import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
// import database from './store/database'

Vue.use(Vuex)

  const state = {
    user_token: null,
    user_type: null,
    count : 0,
  } 
  
  // const storeDB ={
  //   plugins: [VuexORM.install(database)]
  // }
    
  const mutations = {

    activeUser (state,[user_token,user_type]) {
      state.user_token=user_token
      state.user_type=user_type
      console.log(state.user_token,state.user_type)
    },

    increment (state) {
      state.count++
    },

    deleteUser (state){
      state.user_token=null
      state.user_type=null
      console.log(state.user_token,state.user_type)
    }
  }

  const actions = {
    changeUser ({state,commit},[user_token,user_type]) 
    {
      console.log(user_token,user_type)
      commit('activeUser',[ user_token, user_type ])
    },
    increment ({ commit, state }){
      commit('increment')
    }
  }

  const getters = {
    count(state) {
      return state.count 
    },
    dataS(state) {
      return {
        m: state.user_token,
        n: state.user_type
      }
    },
    isActive(state) {
      if(state.user_type != null && state.user_token != null) {
        return true
      }
      else {
        return false
      }
    },
    isAdmin(state) {
      if(state.user_type == 'admin') {
        return true
      }
      else {
        return false
      }
    }
  }

  export default new Vuex.Store ({
    // storeDB,
    state,
    mutations,
    actions,
    getters
  })