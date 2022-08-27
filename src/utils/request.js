import axios from 'axios'
import store from '@/store'
import { message as $message } from '@/libs'

const service = axios.create({
    // 根据项目的状态，自动切换请求的服务地址
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
    config => {
        // 添加 icode
        config.headers.icode = '8C44682DB01A79BF'
        if (store.getters.token) {
            // 如果token存在 注入token
            config.headers.Authorization = `Bearer ${store.getters.token}`
        }
        // 必须返回 config
        return config
    }, error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const { success, message, data } = response.data
        //   要根据success的成功与否决定下面的操作
        if (success) {
            return data
        } else {
            $message('warn', message)
            // TODO：业务错误
            return Promise.reject(new Error(message))
        }
    },
    (error) => {
        // 处理 token 超时问题
        if (
            error.response &&
            error.response.data &&
            error.response.data.code === 401
        ) {
            // TODO: token超时
            store.dispatch('user/logout')
        }
        $message('error', error.response.data.message)
        // TODO: 提示错误消息
        return Promise.reject(error)
    }
)

export default service
