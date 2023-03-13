import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import friend from '../components/friend'
import news from '../components/news'
import HomePage from '../components/HomePage'
import login from '../components/index/login'
import register from '../components/index/register'


export const routes = [

    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/friend',
        name: 'friend',
        component: friend
    },
    {
        path: '/news',
        name: 'news',
        component: news
    },
    {
        path: '/index/login',
        name: 'login',
        component: login
    },
    {
        path: '/index/register',
        component: register
    },
    {
        path: '/HomePage',
        component: HomePage
    },
]

export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router);