import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import lazyLoad from './hooks/ImgLazyLoad'
import './css/main.css'
import './css/animate.css'
import './css/font.css'


createApp(App)
    .use(router)
    .use(lazyLoad)
    .mount('#app')