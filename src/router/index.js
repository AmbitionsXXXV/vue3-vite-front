import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

// 创建vueRouter 实例
const router = createRouter({
    history: createWebHistory(),
    routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})

export default router