import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useREM } from './utils/flexible'
import useTheme from './utils/theme'
import mLibs from './libs'
import './styles/index.scss'
// 注册svg-icons
import 'virtual:svg-icons-register'

useREM()
// 初始化主题
useTheme()
createApp(App).use(mLibs).use(router).use(store).mount('#app')
