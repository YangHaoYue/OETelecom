import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './css/main.css'
import './css/animate.css'


createApp(App)
    .use(router)
    .mount('#app')
