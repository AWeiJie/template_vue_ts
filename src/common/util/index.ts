/**
 * util
 */

import sleep from './sleep'
import deepFreeze from './deepFreeze'
import api from '../../api/index'

let app
let router

export default {
    sleep,
    deepFreeze,

    // Initialize
    init(a, r) {
        if (a) app = a
        if (r) router = r

        return { app, router }
    },

    // Window userAgent
    UA() {
        return this.isWin() && window.navigator.userAgent
    },

    // Checks if in Client
    isWin() {
        return typeof window !== 'undefined'
    },

    // Checks if in the APP
    isAPP() {
        return this.isWin() && /n8Web/i.test(this.UA())
    },

    // Checks if in the IOS
    isIOS() {
        return this.isWin() && /iphone|ipad|ipod/i.test(this.UA())
    },

    // Checks if in the Android
    isAndroid() {
        return this.isWin() && /android/i.test(this.UA())
    },

    // IOS handlers
    runIOS(data, fallback = () => {}, method = 'N8WebView') {
        if (!this.isIOS()) return false

        const handler = window.webkit && window.webkit.messageHandlers[method]
        if (!handler) return fallback()

        return handler.postMessage(data)
    },

    // Android handlers
    runAndroid(data, method = '', callback = '') {
        if (!this.isAndroid() || !window.android) return false
        return window.android[method](JSON.stringify(data), callback)
    },

    // 读取cookies方法
    getCookie(name) {
        let arr = []
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        if ((arr = document.cookie.match(reg))) return unescape(arr[2])
        else return null
    },

    // 写入cookies方法
    setCookie(name, value) {
        const Days = 2
        const exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
        document.cookie =
            name +
            '=' +
            escape(value) +
            ';expires=' +
            exp.toGMTString() +
            ';domain=.n8n8.cn'
    },

    // 获取 token
    getToken() {
        // alert(document.cookie)
        // console.log('获取 token')
        let token = ''
        if (this.isWin()) {
            token = this.getCookie('token')
        }
        // alert(token)
        return token
    },

    // 路由跳转
    nextPath(id, path) {
        console.log(router)
        if (path === '/') {
            path = '0'
        } else {
            path = path.replace('/', '')
        }
        api.submitFlow(id, path).then(data => {
            router.push({
                path: `/${data.response.next_flow}?product_ids=${data.response.contract_id}`
            })
        })
    }
}
