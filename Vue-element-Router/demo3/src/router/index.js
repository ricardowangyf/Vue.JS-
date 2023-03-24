import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home.vue')


// Router.beforeEach((to, from, next) => {
//     // 在此处添加您的验证逻辑或其他操作

//     // 如果用户已经登录，则继续导航
//     if (isLoggedIn()) {
//         next();
//     } else {
//         // 否则，将用户重定向到登录页面
//         next('/login');
//     }
// });
// function isLoggedIn() {
//     return localStorage.getItem('token');
// }
Vue.prototype.$afterEach = function (to, from) {
    // 在每个路由切换后执行的代码
    // 这里可以写一些统计、日志等通用的操作
    console.log(`从 ${from.path} 到 ${to.path} 的路由切换完成`);
};
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
        {
            path: '/transition',
            name: 'transition',
            component: () => import('../components/transition.vue'),
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/daohang',
            name: 'daohang',
            component: () => import('../components/daohang.vue'),
        },
        {
            path: '/footer',
            components: {
              default: Home, // 默认组件
              footer: () => import('../components/footer.vue'), // 名为 "footer" 的命名视图
            }
          },
    ],
    // afterEach: vm.$afterEach,
})


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);