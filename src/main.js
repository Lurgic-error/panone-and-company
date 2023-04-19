import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

import 'animate.css/animate.min.css'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
import './assets/main.css'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCheckSquare, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import onScrollAnimation from './directives/onScrollAnimation'

/* add icons to the library */
library.add(faUserSecret)
library.add(faCheckSquare)

const app = createApp(App)

app.directive('onScrollAnimate', onScrollAnimation)

app.use(createPinia())
app.use(router)
app.use(VueAnimateOnScroll)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
