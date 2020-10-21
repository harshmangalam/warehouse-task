import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "Home" */ '../views/HomePage.vue'),
  },
  {
    path: '/:id',
    name: 'Detail',
    component: () =>
      import(/* webpackChunkName: "Detail" */ '../views/DetailPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
