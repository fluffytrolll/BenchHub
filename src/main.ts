import { createApp } from 'vue'
import router from './router.ts'
import i18n from './i18n.ts'

import './style.scss'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
