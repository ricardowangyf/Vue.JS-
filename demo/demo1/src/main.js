import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

Vue.component('my-component', {
  // 组件选项
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
