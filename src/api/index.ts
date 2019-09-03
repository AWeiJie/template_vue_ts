import axios from 'axios'
import { post, get, ax } from './http'

// import modules
interface Content {
    code?: number
    msg?: string
}

export default {
    // 发送验证码
    sendCode(handset, captcha) {
        return post<{
            content: Content
        }>('https://passport.n8n8.cn/api/v1/login/sms/send', {
            handset,
            captcha,
            type: 'login'
        })
    },

    // 手机验证码登录
    login(handset, code) {
        return get<{
            content: any
        }>('https://gw.n8n8.cn/n8sf/app/auth/v1/jwt/login/users', {
            handset,
            code
        })
    },

    ax: ax,
    axios: axios
}
