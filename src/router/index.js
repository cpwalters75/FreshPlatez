import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Checkout from '../views/Checkout.vue'
import CheckoutTest from '../components/CheckoutTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutTest
  }
]

const router = new VueRouter({
  routes
})

export default router
