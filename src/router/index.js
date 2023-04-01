import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import WebSite from '../components/WebSite'
import LoginLogin from '../components/LoginLogin'
import SignupSign from '../components/SignupSign'


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
