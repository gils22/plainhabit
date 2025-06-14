import './assets/main.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import fadeScroll from './directives/fadeScroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'leaflet/dist/leaflet.css'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
app.directive('fade-scroll', fadeScroll)
AOS.init({ once: true })

AOS.init({
  once: true,
  duration: 800,
})
