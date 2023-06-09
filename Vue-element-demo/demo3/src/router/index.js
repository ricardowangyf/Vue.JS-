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
        {
            path: '/model',
            component: () => import('../view/model.vue'),
            // 表单输入绑定
        },
        {
            path: '/components',
            component: () => import('../view/components.vue'),
            // 表单输入绑定
        },
        {
            path: '/All',
            component: () => import('../view/All.vue'),
            // 组件之间的循环引用
        },
        {
            path: '/aaa',
            component: () => import('../view/parte.vue'),
            // 异步组件
        },
        {
            path: '/cccc',
            component: () => import('../view/comp.vue'),
            // 程序化的事件侦听器
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