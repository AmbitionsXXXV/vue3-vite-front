import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import './styles/index.scss'
// 注册svg-icons
import 'virtual:svg-icons-register'

useREM()
createApp(App).use(mLibs).use(router).use(store).mount('#app')
