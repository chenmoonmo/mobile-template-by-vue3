import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'plugins/vant'
import './assets/styles/index.scss'

console.log(vant)

createApp(App).use(store).use(router).use(vant).mount('#app')
