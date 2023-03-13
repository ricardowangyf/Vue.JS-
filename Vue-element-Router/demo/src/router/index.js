import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Good from '../components/Good'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import User from '../components/User'

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/good', component: Good },
    { path: '/user/:id', component: User },
    { path: '*', component: NotFound }
]

export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router);