import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/search',
    name: 'search',
    component: () => import( /* webpackChunkName: "search" */ '../views/home/search.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/buybus',
    name: 'buybus',
    component: () => import( /* webpackChunkName: "buybus" */ '../views/Buybus.vue')

  },
  {
    path: '/jingxi',
    name: 'jingxi',
    component: () => import( /* webpackChunkName: "jingxi" */ '../views/Jingxi.vue')

  },
  {
    path: '/my',
    name: 'my',
    component: () => import( /* webpackChunkName: "my" */ '../views/My.vue')

  }
]

const router = new VueRouter({
  routes
})

export default router