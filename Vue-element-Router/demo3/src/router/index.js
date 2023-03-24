import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home.vue')


Router.beforeEach((to, from, next) => {
    // 在此处添加您的验证逻辑或其他操作
  
    // 如果用户已经登录，则继续导航
    if (isLoggedIn()) {
      next();
    } else {
      // 否则，将用户重定向到登录页面
      next('/login');
    }
  });
  function isLoggedIn() {
    return localStorage.getItem('token');
  }
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
        
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);