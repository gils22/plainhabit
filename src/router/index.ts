import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CheckHealthView from '@/views/financialcheck/FinancialCheck.vue'
import PromoView from '@/views/promo/PromoView.vue'
import { supabase } from '@/lib/supabase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/cek-kesehatan',
    name: 'CheckHealth',
    component: CheckHealthView,
    meta: { requiresAuth: true },
  },
  {
    path: '/rekomendasi-promosi',
    name: 'PromoRecommendation',
    component: PromoView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/RegisterView.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/ProfileView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const { data } = await supabase.auth.getSession()
  const isAuthenticated = !!data.session

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert('Silakan login terlebih dahulu untuk mengakses halaman ini.')
    return next('/login')
  }

  next()
})

export default router
