import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Good from '../components/Good'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import User from '../components/User'



export const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/good', name: 'Good', component: Good },
    { path: '/user/:id', name: 'User', component: User },
    { path: '*', name: 'NotFound', component: NotFound },
]


export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}