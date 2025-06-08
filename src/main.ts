import './assets/main.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import { supabase } from '@/lib/supabase'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.mount('#app')

supabase.auth.getSession().then(({ data }) => {
  console.log('Supabase Session:', data.session)
})
