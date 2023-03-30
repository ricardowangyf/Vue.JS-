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
        },//class与style绑定
        {
            path: '/condition',
            name: 'condition',
            component: () => import('../components/condition.vue'),
        },//条件渲染
        {
            path: '/vfor',
            name: 'vfor',
            component: () => import('../components/vfor.vue'),
        },//列表渲染
        {
            path: '/processing',
            name: 'processing',
            component: () => import('../components/processing.vue'),
        },//事件处理
        {
            path: '/biao',
            name: 'biao',
            component: () => import('../components/biao.vue'),
        },//表单输入绑定
        {
            path: '/xiushi',
            name: 'xiushi',
            component: () => import('../components/xiushi.vue'),
        },//修饰符
        {
            path: '/xiasdasdushi',
            name: 'MyLocalComponent',
            component: () => import('../components/MyLocalComponent.vue'),
        },//组件注册/局部注册
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);