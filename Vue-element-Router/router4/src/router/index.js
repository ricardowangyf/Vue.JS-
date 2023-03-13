import Vue from 'vue'
import Router from 'vue-router'
import UserSettings from '../components/UserSettings'
import UserEmailsSubscriptions from '../components/UserEmailsSubscriptions'
import UserProfile from '../components/UserProfile'
import UserProfilePreview from '../components/UserProfilePreview'


export const routes = [

    {
        path: '/settings',
        // You could also have named views at tho top
        component: UserSettings,
        children: [{
            path: 'emails',
            component: UserEmailsSubscriptions
        }, {
            path: 'profile',
            components: {
                default: UserProfile,
                helper: UserProfilePreview
            },

        }]
    }
]

export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router)