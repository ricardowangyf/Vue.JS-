import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'isactive',
    routes: [
        {
            path: '/',
            component: () => import('../components/HelloWorld.vue'),
            // CSS过渡
        },
        {
            path: '/donghua',
            component: () => import('../view/dong.vue'),
            // CSS动画 
        },
        {
            path: '/ming',
            component: () => import('../view/ming.vue'),
            // 自定义过渡的类名
        },
        {
            path: '/CompantNmae',
            component: () => import('../view/CompantNmae.vue'),
            // JavaScript 钩子
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