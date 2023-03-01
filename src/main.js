import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
// 三级联动的组件 -- 全局注册
import TypeNav from '@/components/TypeNav'
// 引入仓库
import store from '@/store'
// 引入mock.serve 
import '@/mock/mockServe';
// 引入swiper 样式
// import 'swiper/css';


Vue.config.productionTip = false

/**
 * 第一个参数： 全局组件的名字
 * 第二个参数： 哪个组件
 */
Vue.component(TypeNav.name,TypeNav)
// reqCategoryList().then((re) => {
//   console.log(re)
//   console.log(11)
// })
new Vue({
  render: h => h(App),
  // 注册路由 kv一致省略v
  router,
  // 注册仓库： 组件实例身上会多一个$store属性
  store
}).$mount('#app')

