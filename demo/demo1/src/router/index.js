import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'isactive',
    base: '/TrainingApp/',// 属性用于指定应用程序部署时的基本 URL 路径
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: () => import('../components/HelloWorld.vue'),
        },//计算属性
        {
            path: '/list',
            name: 'ListenerApp',
            component: () => import('../components/ComPant.vue'),
        },//侦听器
        {
            path: '/vbind',
            name: 'vbind',
            component: () => import('../components/vbind.vue'),
        },//侦听器
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);