import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 默认的$bus没值，所以给vue的原型的$bus属性赋值vue实例,设置事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 封装request模块
import {request} from './network/request'

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err)
})
