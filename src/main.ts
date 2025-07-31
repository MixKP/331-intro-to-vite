import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/style.css'
import 'nprogress/nprogress.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.vue'
import router from './router'

const app = createApp(App)
inject()
injectSpeedInsights()

app.use(createPinia())
app.use(router)

app.mount('#app')
