import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'
import { Lazyjiazai } from '@/directives/index.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Lazyjiazai)

app.mount('#app')
