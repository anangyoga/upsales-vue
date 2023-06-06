import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/Auth/SignUpView.vue'
import AddProductView from '@/views/Auth/AddProductView.vue'
import DashboardViewVue from '@/views/Dashboard/DashboardView.vue'
import ProductView from '@/views/Dashboard/Product/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardViewVue
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    }
  ]
})

export default router
