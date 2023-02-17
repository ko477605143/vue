export const routes = [
    {
        path: '*', redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../pages/Home'),
        // 路由原信息
        meta: {
            show: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('../pages/Search'),
        meta: {
            show: true
        },
        // 路由组件是否能传递props参数
        // 第一种写法 布尔值
        // props: true,
        // 第二种写法 额外的给路由组件传递一下 props
        // props: {a:1,b:2}
        // 第三种写法 函数写法
        props: (r) => {
            return { 
                keyword: r.params.keyword, 
                k: r.query.k 
            }
        }
    },
    {
        path: '/login',
        component: () => import('../pages/Login'),
        meta: {
            show: false
        }

    },
    {
        path: '/register',
        component: () => import('../pages/Reg'),
        meta: {
            show: false
        }
    },

]