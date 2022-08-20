import axios from 'axios'

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
        // 必须返回 config
        return config
    }
)

/**
 * 响应拦截器:
 * 服务端返回数据之后，前端 .then 之前被调用
 */
service.interceptors.response.use(
    response => {
        const { success, message, data } = response.data
        if (success) {
            return data
        }
        // TODO: 业务请求错误
        return Promise.reject(new Error(message))
    }
)

export default service
