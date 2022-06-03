import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component:  () => import('../views/LoginView.vue')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/ForgotView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router
