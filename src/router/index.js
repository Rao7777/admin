import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import resure from '@/views/resure.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/resure',
    name: 'resure',
    component: () => import('../views/resure')
  }, {
    path: '/today',
    name: 'today',
    component: () => import('../views/today')
  }, {
    path: '/earth',
    name: 'earth',
    component: () => import('../views/earth')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
