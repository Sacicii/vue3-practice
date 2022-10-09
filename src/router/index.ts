import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import( '../views/home/Home.vue'),
    children: [
      {
        path: 'home',
        name: 'main',
        component: () => import( '../views/home/Main.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import( '../views/about/Index.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
