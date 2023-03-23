import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    linkActiveClass: 'isactive',
     mode: 'history',
    routes: [
        {
            path: '/user/:id',
            name: 'UserDetail',
            component: () => import('../components/homepage.vue'),
        },
        {
            path: '/',
            name: 'UserList',
            component: () => import('../components/UserList.vue'),
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