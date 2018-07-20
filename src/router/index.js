import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signup from '@/components/signup'
import dashboard from '@/components/dashboard'
import home from '@/components/home'
import forgotpassword from '@/components/forgotpassword'
import admin from '@/components/admin'
import user from '@/components/user'
import store from '../store'
import Vuex from 'vuex'

Vue.use(Router)

export default new Router({
 
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: home    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {isActive: false}    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
      meta: {isActive: false}    },    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta: {isActive: true}    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: forgotpassword,
      meta: {isActive: false}    },
    {
      path: '/admin',
      name: 'adminPage',
      component: admin,
      meta: {isActive: true, isAdmin: true}  },
    {
      path: '/user',
      name: 'userPage',
      component: user,
      meta: {isActive: true, isAdmin: false}  },  
  ],

  
})
