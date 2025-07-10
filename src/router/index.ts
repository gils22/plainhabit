import { createRouter, createWebHistory } from 'vue-router'
import { userRoutes } from './user'
import { adminRoutes } from './admin'
import NotFound from '@/views/404.vue'

const routes = [
  ...userRoutes,
  ...adminRoutes,
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
