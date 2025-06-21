import './assets/main.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import fadeScroll from './directives/fadeScroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'leaflet/dist/leaflet.css'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import { useLoadingStore } from '@/stores/loading'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)
app.use(router)
app.use(MotionPlugin)
app.directive('fade-scroll', fadeScroll)

AOS.init({
  once: true,
  duration: 800,
})

app.mount('#app')

router.beforeEach(() => {
  const loadingStore = useLoadingStore()
  loadingStore.startLoading()
})

router.afterEach(() => {
  const loadingStore = useLoadingStore()
  loadingStore.stopLoading()
})
