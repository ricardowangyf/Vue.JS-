import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import("@/components/Home")
const Login = () =>
    import("../components/Login")
const NotFound = () =>
    import("../components/NotFound")
Vue.use(Router)


export const routes = [{
    path: '/Home',
    name: '/Home',
    component: Login
},
{
    path: '/Login',
    name: '/Login',
    component: Home
},
{
    path: '/Welcome',
    name: '/Welcome',
    component: Login
},
{
    name: 'home',
    path: '/home',
    component: Home
},
{
    path: '/login',
    component: Login
},
{
    path: '*',
    component: NotFound
},
{
    path: '/',
    component: Home
},
{
    path: '/home',
    component: Home,
    alias: '/Login'
}
]

export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}