// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from '@/router/router.config'
// 使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 配置路由
    routes
})

