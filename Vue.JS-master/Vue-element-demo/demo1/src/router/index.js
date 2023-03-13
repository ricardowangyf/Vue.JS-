import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'isactive',
    routes: [
        {
            path: '/',
            component: () => import('../views/vfor.vue'),
            // v-for循环    
        },
        {
            path: '/v-for',
            component: () => import('../views/HelloWorld.vue'),
            // v-for循环
        },
        {
            path: '/vforsecond',
            component: () => import('../views/vforsecond.vue'),
            // v-for循环
        },
        {
            path: '/vforthird',
            component: () => import('../views/vforthird.vue'),
            // v-for循环
        },
        {
            path: '/reverseMessage',
            component: () => import('../views/reverseMessage.vue'),
            // 模板语法
        },
        {
            path: '/templatesyntax',
            component: () => import('../views/templatesyntax.vue'),
            // 模板引擎
        },
        {
            path: '/computed',
            component: () => import('../views/computed.vue'),
            // 计算属性和侦听器
        },
        {
            path: '/classstyle',
            component: () => import('../views/classorstyle.vue'),
            // class与style绑定
        },
        {
            path: '/iffor',
            component: () => import('../views/iffor.vue'),
            // 条件渲染 v-if v- else v-shou v-else-if
        },
        {
            path: '/listrendering',
            component: () => import('../views/listrendering.vue'),
            // 列表渲染
        },
        {
            path: '/eventprocessing',
            component: () => import('../views/eventprocessing.vue'),
            // 事件处理
        },
        {
            path: '/vmodel',
            component: () => import('../views/vmodel.vue'),
            // 表单输入绑定
        },
        {
            path: '/components',
            component: () => import('../views/components.vue'),
            // 组件注册
        },
        {
            path: '/compentsagain',
            component: () => import('../views/compentsagain.vue'),
            // 通过 Prop 向子组件传递数据
        },
        {
            path: '/subcomponent',
            component: () => import('../views/subcomponent.vue'),
            // 监听子组件事件
        },
        {
            path: '/dynamiccomponents',
            component: () => import('../views/dynamiccomponents.vue'),
            // 动态组件
        },
        {
            path: '/Global registration',
            component: () => import('../views/Global registration.vue'),
            // 全局组件
        },
        {
            path: '/view',
            component: () => import('../views/views.vue'),
            // props验证
        },
        {
            path: '/button',
            component: () => import('../views/button.vue'),
            // 自定义事件
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