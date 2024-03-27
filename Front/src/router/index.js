import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/mainPage.vue'),
      meta:{title:'首页'},
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/loginPage.vue'),
      meta:{title:'登录'},
    },
    {
      path:"/register",
      name:"register",
      component:()=>import('@/views/registerPage.vue'),
      meta:{title:'注册'},
    },
    {
      path:"/detail/:id",
      name:"detail",
      component:()=>import("@/views/detailPage.vue"),
    },
    {
      path:"/my",
      name:"my",
      component:()=>import("@/views/myPage.vue"),
    },
    {
      path:"/upload",
      name:"upload",
      component:()=>import("@/views/uploadPage.vue"),
    }
    
  ]
})

export default router
