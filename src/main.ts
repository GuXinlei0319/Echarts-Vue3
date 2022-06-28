import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
//import router from './router'  //.use(router)
import store from './store'
import '@/utils/reset.css'
import '@/utils/index.css'
import '@/utils/flexible.js'

createApp(App).use(store).mount('#app')
