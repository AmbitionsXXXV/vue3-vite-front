import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

/**
 * 判断当前是否为移动设备，判断依据为：屏幕宽度是否小于一个指定宽度(1280)
 */
export const isMobileTerminal = computed(() => {
    return width.value < PC_DEVICE_WIDTH
})

/**
 * 动态指定 rem 基准值，最大为40px
 * 根据用户的屏幕宽度，进行一些计算，把计算出来的值赋值给 html 根标签作为font-size的大小
 */
export const useREM = () => {
    // 定义最大的 fontSize
    const MAX_FONT_SIZE = 40
    // 监听 html 文档被解析完成的事件
    document.addEventListener('DOMContentLoaded', () => {
        // 拿到 html 标签
        const html = document.querySelector('html')
        // 计算font-size，根据屏幕宽度 / 10
        let fontSize = window.innerWidth / 10
        fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
        // 赋值给html
        html.style.fontSize = fontSize + 'px'
    })
}