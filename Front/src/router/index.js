import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/mainPage.vue'),
      meta:{title:'首页'}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/loginPage.vue'),
    },
    
  ]
})

export default router
