import request from '@/utils/request'

/**
 * 人类行为验证
 */
export const getCaptcha = (data) => {
    return request({
        url: '/sys/captcha',
        method: 'POST',
        data
    })
}

/**
 * 登录
 */
export const loginUser = (data) => {
    return request({
        url: '/sys/login',
        method: 'POST',
        data
    })
}

/**
 * 获取用户信息
 */
export const getProfile = () => {
    return request({
        url: '/user/profile'
    })
}

/**
 * 注册
 */
export const registerUser = (data) => {
    return request({
        url: '/sys/register',
        method: 'POST',
        data
    })
}