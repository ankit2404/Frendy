import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreativeView from '../views/Creative.vue'
import Account from '../components/Account.vue'
import Category from '../components/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'creative',
    component: CreativeView
  },
  {
    path: '/creative/:id',
    name: 'home',
    component: HomeView
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  }
]

const router = new VueRouter({
  routes
})

export default router
