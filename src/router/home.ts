/**
 * home module router
 */

import { RouteConfig } from 'vue-router'

function getView(viewName) {
    return (resolve, reject) => {
        require.ensure(
            [],
            require => {
                let map = {
                    login: require('views/Login') // 登录页面
                }

                resolve(map[viewName])
            },
            reject,
            'home'
        )
    }
}

let routes: RouteConfig[] = [
    {
        name: 'login',
        path: '/'
    },
    {
        name: 'defaultView',
        path: '*'
    }
]

routes.forEach(v => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name)
    }
})

export default routes
