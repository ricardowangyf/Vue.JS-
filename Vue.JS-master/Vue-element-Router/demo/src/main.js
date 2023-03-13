import Vue from 'vue'
import App from './components/App'
import { router } from './router/index'

new Vue({
    // el: '#app',
    router,
    render(h) {
        return h(App);
    }
}).$mount('#app')