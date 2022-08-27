import { h, render } from 'vue'
import messageComponent from './index.vue'

/**
 * 
 * @param {*} type 类型：success、warn、error
 * @param {*} content 描述文本
 * @param {*} duration 展示时间（毫秒），默然值：3000
 */
export const message = (type, content, duration = 3000) => {
    /**
     * 动画结束时的回调
     */
    const onDestroy = () => {
        // 3. message 销毁
        render(null, document.body)
    }

    // 1. 返回 vnode
    const vnode = h(messageComponent, {
        type,
        content,
        duration,
        destroy: onDestroy
    })
    // 2. render
    render(vnode, document.body)
}
