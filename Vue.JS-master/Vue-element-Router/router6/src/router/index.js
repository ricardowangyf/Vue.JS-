import Vue from "vue";
import Router from "vue-router";

const UserApp = () =>
    import ("@/components/UserApp")



export default new Router({
    routes: [{
        path: '/UserApp/:id',
        name: "UserApp",
        component: UserApp,
        props: 111
    }, ]
});



export const router = new Router({
    Router // (缩写) 相当于 routes: routes
});

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}