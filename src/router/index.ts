import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/Auth/SignUpView.vue'
import AddProductView from '@/views/Auth/AddProductView.vue'
import DashboardLayout from '@/components/Layout/DashboardLayout.vue'
import DashboardViewVue from '@/views/Dashboard/DashboardView.vue'
import ProductViewVue from '@/views/Dashboard/Product/ProductView.vue'
import ProductAddViewVue from '@/views/Dashboard/Product/ProductAddView.vue'
import TransactionView from '@/views/Dashboard/Transaction/TransactionView.vue'
import TransactionAddView from '@/views/Dashboard/Transaction/TransactionAddView.vue'
import TransactionDetailView from '@/views/Dashboard/Transaction/TransactionDetailView.vue'
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
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardViewVue,
          meta: {
            isDashboard: true,
            activeMenu: 'dashboard'
          }
        },
        {
          path: '/products',
          name: 'products',
          component: ProductViewVue,
          meta: {
            activeMenu: 'products'
          }
        },
        {
          path: '/products/add',
          name: 'products-add',
          component: ProductAddViewVue,
          meta: {
            activeMenu: 'products'
          }
        },
        {
          path: '/transactions',
          name: 'transactions',
          component: TransactionView,
          meta: {
            activeMenu: 'transaction'
          }
        },
        {
          path: '/transactions/add',
          name: 'transactions/add',
          component: TransactionAddView,
          meta: {
            activeMenu: 'transaction'
          }
        },
        {
          path: '/transactions/:id/detail',
          name: 'transactions/detail',
          component: TransactionDetailView,
          meta: {
            activeMenu: 'transaction'
          }
        }
      ]
    }
  ]
})

export default router
