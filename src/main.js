// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'



// Require the main Sass manifest file
require('./assets/sass/main.scss');
Vue.use(router)
// router.beforeEach((to,from,next) => {
//   if(to.path === '/') next()
//   if(to.path === '/login' || to.path === '/signup' || to.path === '/forgotpassword')
//   {
//     console.log("in route1", store.state.user_token, store.state.user_type)
//     if(store.state.user_token != null)
//     {
//       next('/dashboard')
//     }
//     else
//       next()
//   }
//   if(to.path === '/dashboard' || to.path === '/admin' || to.path === '/user')
//   {
//     console.log("in route2", store.state.user_token, store.state.user_type)
//     if(store.state.user_token == null)
//     {
//       next('/login')
//     }
//     else
//       next()
//   }
//   if(to.path === '/admin' && store.state.user_token!=null && store.state.user_type == 'user')
//   {
//     alert("access denied")
//     next('/')
//   }
// })

router.beforeEach((to,from,next) => {
  if(to.path === '/') {
    console.log("way to home")
    next()
  }
  else { 
    console.log('meta test before each', to.meta.isActive, to.meta.isAdmin);
    if (to.meta.isActive) {
      console.log("meta test in if in store", store.getters.isActive, store.getters.isAdmin)
      if(store.getters.isActive){
        if(to.meta.isAdmin && !store.getters.isAdmin) {
          alert("access denied")
        }
        else {
          next()
        }
      }
      else {
        console.log("redirecting")
        next('/login')
      }
      
    }
    else {
      console.log("meta test in else in store", store.getters.isActive, store.getters.isAdmin)
      if(!store.getters.isActive){
        // if(to.matched.some((route) => route.meta && route.meta.isActive)){
          next()
        }
      else {
        console.log("redirecting")
        next('/dashboard')
      }
    }
  }
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
