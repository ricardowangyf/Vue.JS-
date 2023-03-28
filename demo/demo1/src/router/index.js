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
        },
        {
            path: '/list',
            name: 'ListenerApp',
            component: () => import('../components/ComPant.vue'),
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