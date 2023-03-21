import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'isactive',
    routes: [
        {
            path: '/user/:id',
            name: 'user',
            component: () => import('../components/User.vue')
        },   //带参数的动态路由匹配
        {
            path: '/name/:id',
            // path: '/' 表示匹配根路径，即主页。
            component: () => import('../components/name.vue'),
            children: [
                { path: 'profile',
                 component: () => import('../components/pofile.vue' ),
                },
                { path: 'posts',
                 component: () => import('../components/posts.vue' ), 
                }
            ]
        }
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);