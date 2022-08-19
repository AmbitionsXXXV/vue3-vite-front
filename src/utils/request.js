import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        // 添加 icode
        config.headers.icode = '8C44682DB01A79BF'
        // 必须返回 config
        return config
    }
)


export default service
