import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
// 三级联动的组件 -- 全局注册
import TypeNav from '@/pages/Home/TypeNav'

Vue.config.productionTip = false

/**
 * 第一个参数： 全局组件的名字
 * 第二个参数： 哪个组件
 */
Vue.component(TypeNav.name,TypeNav)


new Vue({
  render: h => h(App),
  // 注册路由 kv一致省略v
  router
}).$mount('#app')
