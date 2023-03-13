import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'isactive',
    routes: [
        {
            path: '/fatherpage',
            component: () => import('../view/fatherpage.vue'),
            // v-for循环    
        },
        {
            path: '/slot',
            component: () => import('../view/slot.vue'),
            // 动态插槽名    
        },
        {
            path: '/parentcomponent',
            component: () => import('../view/parentcomponent.vue'),
            // 作用域插槽    
        },
        {
            path: '/page',
            component: () => import('../view/page.vue'),
            // 动态组件
        },
        {
            path: '/fatherpagea',
            component: () => import('../view/fatherpagea.vue'),
            // 在动态组件上使用 keep-alive
        },
        {
            path: '/fahterlazy',
            component: () => import('../view/fahterlazy.vue'),
            // 异步组件
        },
        {
            path: '/myInput',
            component: () => import('../view/myinput.vue'),
            // 自定义组件的 v-model
        },
        {
            path: '/vfor',
            component: () => import('../view/vfor.vue'),
            // 条件渲染
        },
        {
            path: '/incrementCount',
            component: () => import('../view/incrementCount.vue'),
            // 点击事件
        },
        {
            path: '/handleSubmit',
            component: () => import('../view/handleSubmit.vue'),
            // 事件处理方法
        },
        {
            path: '/message',
            component: () => import('../view/message.vue'),
            // 按键修饰符
        },
        {
            path: '/xuanran',
            component: () => import('../view/xuanran.vue'),
            // 列表渲染
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