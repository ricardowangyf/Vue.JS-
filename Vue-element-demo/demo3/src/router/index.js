import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'isactive',
    routes: [
        {
            path: '/',
            component: () => import('../view/homepage.vue'),
            // 计算属性和侦听器 基础例子
        },
        {
            path: '/homepagetwo',
            component: () => import('../view/homepagetwo.vue'),
            // 计算属性和侦听器 基础例子
        },
        {
            path: '/classstyle',
            component: () => import('../view/classstyle.vue'),
            // Class 与 Style 绑定
        },
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);