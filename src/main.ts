import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import V3ScrollLock from 'v3-scroll-lock'
//import VueGoogleMaps from '@fawmi/vue-google-maps'

import './assets/css/style.css'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory(),
    routes
  })
)

app.use(V3ScrollLock, {})
app.mount('#app')
//