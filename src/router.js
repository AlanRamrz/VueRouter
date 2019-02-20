import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Products from './views/Products.vue'
import Detail from './views/Detail.vue'
import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/detail/:pId',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ]
})
