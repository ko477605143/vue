export default  routes = [
    {
        path: '/home',
        component: () => import('../pages/Home')
    },
    {
        path: '/search',
        component: () => import('../pages/Search')
    },
    {
        path: '/login',
        component: () => import('../pages/Login')
    },
    {
        path: '/register',
        component: () => import('../pages/Reg')
    },

]