import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/LandingView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('../views/VerifyView.vue'),
    },
    {
      path: '/dashboard',
      name: 'home',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/airtime',
      name: 'airtime',
      component: () => import('../views/AirtimePurchaseView.vue')
    },
    {
      path:'/data',
      name:'data',
      component: () => import('../views/DataPurchaseView.vue')
    },
    {
      path:'/history',
      name:'history',
      component: () => import('../views/TransactionHistoryView.vue')
    },
    {
      path:'/profile',
      name:'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path:'/transfer',
      name:'transfer',
      component: () => import('../views/TopUpTransferView.vue')
    }
  ],
})

export default router
