import Vue from 'vue'
import VueRouter from 'vue-router'
import shopApp from '../views/shop-app.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'shopApp',
    component: shopApp
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
