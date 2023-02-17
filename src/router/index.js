// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from '@/router/router.config'
// 使用插件
Vue.use(VueRouter)
// 
// console.log(VueRouter.prototype)
// 先把VueRouter原型对象的push的方法先保存一份（因为还需要使用push
// 方法跳转，只是对方法进行修改 （重写））
let originPush = VueRouter.prototype.push; // 备份了原型对象上的push方法
// 重写push|replace方法
VueRouter.prototype.push = function(localtion,resolve,reject) {
    // 第一个参数localtion 告诉原来的push往哪里跳，传递什么参数
    
}
export default new VueRouter({
    // 配置路由
    routes
})

