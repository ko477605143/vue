// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/router.config'
// 使用插件
Vue.use(VueRouter)
// 
// console.log(VueRouter.prototype)
// 重写pish方法可以避免多次点击报错（promise 需要成功或者失败的回调，在同页面所以报错）
/**
 * 先把VueRouter原型对象的push的方法先保存一份（因为还需要使用push
   方法跳转，只是对方法进行修改 （重写））
 */
let originPush = VueRouter.prototype.push; // 备份了原型对象上的push方法
let originReplace = VueRouter.prototype.replace; // 备份了原型对象上的replace方法
// 重写push|replace方法
VueRouter.prototype.push = function (localtion, resolve, reject) {
    // 第一个参数localtion 告诉原来的push往哪里跳，传递什么参数
    // 第二个参数 成功回调
    // 第三个参数 失败回调
    if (resolve && reject) {
        /**
         * 将函数绑定到某个对象，call()不会创建一个函数，函数体内的
         * this对象的值会被绑定到传入call()中的第一个参数的值，
         * 如果不写call 那么this的值是window，写了就是vueRouter 
         * call | apply的区别
         * 相同点： 都可以调用函数一次，并且篡改函数上下文一次
         * 不同点：call和apply传递参数，
         * call传递参数用都逗号隔开
         * apply方法执行，传递数组
         */
        originReplace.call(this, localtion, resolve, reject)
    } else {
        originReplace.call(this, localtion).catch(err => err)
    }
    // 重写push|replace方法
    VueRouter.prototype.replace = function (localtion, resolve, reject) {
        if (resolve && reject) {
            originPush.call(this, localtion, resolve, reject)
        } else {
            originPush.call(this, localtion).catch(err => err)
        }
    }


}
export default new VueRouter({
    // 配置路由
    routes
})

