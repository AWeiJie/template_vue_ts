import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'

// register plugins hooks fo vue component
import 'common/registerHooks'

import * as svgicon from 'vue-svgicon'
// import all icons
import 'components/icons'

import router from 'router'
import store from 'store'

import App from 'pages/App'

import Cookie from 'vue-cookie'

import Utils from 'common/util/index'

import {
    Input,
    Message,
    Form,
    FormItem,
    Button,
    Checkbox,
    Radio,
    Dialog,
    CheckboxGroup,
    MessageBox,
    DatePicker,
    Select,
    Option,
    Loading
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Dialog)
Vue.use(CheckboxGroup)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading)

Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert

Vue.use(svgicon, {
    tagName: 'icon'
})

// C++函数初始化
if (navigator.userAgent.indexOf('JZ_SoftWare') !== -1) {
    const jzObj = window.CreateJZObjectV1()
    jzObj.OnJsInit()
    Vue.prototype.$jzObj = jzObj
}

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

// Utils initialize
Utils.init(App, router)
