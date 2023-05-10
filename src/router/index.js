import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import WebSite from '../components/WebSite'
import LoginLogin from '../components/LoginLogin'
import SignupSign from '../components/SignupSign'
// import BookingOnline from '../views/BookingOnline'
// import DashBoard from '../views/dashboard/DashBoard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WebSite',
    component: WebSite
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginLogin
  },
  {
     path: '/signup',
     name: 'Signup',
     component: SignupSign
  },
  {
     path: '/tenant',
     name: 'Home',
     component: ()=> import(/*webpackChunkName: "home" */ '../views/dashboard/Home'),
     children: [
      {
      path: 'dash',
      name: 'DashBoard',
      component: () => import(/*webpackChunkName: "dashboard" */ '../views/dashboard/DashBoard')
     },
      {
        path: 'booking',
        name:'BookingOnline',
        component: () => import(/*webpackChunkName: "bookingonline*/ '../views/BookingOnline')
      },

      {
        path: 'email',
        name:'Email',
        component: () => import(/*webpackChunkName: "email"*/ '../views/Email')
      },
      
      {
        path: 'messages',
        name:'Messages',
        component: () => import(/*webpackChunkName: "messages"*/ '../views/Messages')
      },
      {
        path: 'component',
        name:'ComPonent',
        component: () => import(/*webpackChunkName: "component"*/ '../views/ComPonent')
      },
      {
        path: 'pugins',
        name:'Pugins',
        component: () => import(/*webpackChunkName: "pugins"*/ '../views/Pugins')
      },
      {
        path:'settings',
        name:'SetTings',
        component: () => import (/*webpackChunkName: "settings"*/ '../views/SetTings')
      },
      {
        path :'sms',
        name:"SmsSms",    
        component: () => import (/*webpackChunkName: "sms"*/ '../views/SmsSms')
      }
    ]
  },
  // {
  //    path:'/dashboard',
  //    name:'DashBoard',
  //    component: DashBoard
  // },
  

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
