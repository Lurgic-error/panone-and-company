import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

import 'animate.css'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
import './assets/main.css'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAnimateOnScroll)
app.mount('#app')
