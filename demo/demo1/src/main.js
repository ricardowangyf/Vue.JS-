import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

Vue.component('my-component', {
  // 组件选项
})
Vue.component('my-component', {
  props: {
    // prop验证类型为字符串
    propA: String,
    // 数字类型，且必须有默认值
    propB: {
      type: Number,
      default: 100
    },
    // 布尔类型，且必须为true
    propC: {
      type: Boolean,
      required: true
    },
    // 对象/数组类型
    propD: {
      type: [Object, Array],
      default: function () {
        return {}
      }
    },
    // 自定义验证函数
    propE: {
      validator: function (value) {
        // 值必须是字符串并且长度大于3
        return typeof value === 'string' && value.length > 3
      }
    }
  },
  template: `
    <div>
      <p>propA: {{ propA }}</p>
      <p>propB: {{ propB }}</p>
      <p>propC: {{ propC }}</p>
      <p>propD: {{ propD }}</p>
      <p>propE: {{ propE }}</p>
    </div>
  `
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
