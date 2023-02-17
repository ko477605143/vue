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
        path: '/search',
        component: () => import('../pages/Search'),
        meta: {
            show: true
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