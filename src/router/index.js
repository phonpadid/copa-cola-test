import {createWebHistory, createRouter} from "vue-router";
import * as vueRouter from 'vue-router';

import {createApp} from 'vue';

createApp(vueRouter);
const routes = [
    {
        path: '/register',
        component: () => import(/* webpackChunkName: "Login" */'@/views/Pages/Register/RegisterForm.vue'),
        children: [
            {
                component: () => import(/* webpackChunkName: "Order Index" */ '@/views/Pages/Register/RegisterForm.vue'),
                path: '',
                name: 'register.index',
                meta: {
                    layout: "default",
                }
            },
        ],
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "Login" */'@/views/Pages/Register/LoginForm.vue'),
        children: [
            {
                component: () => import(/* webpackChunkName: "Order Index" */ '@/views/Pages/Register/LoginForm.vue'),
                path: '',
                name: 'login.index',
                meta: {
                    layout: "default",
                }
            },
        ],
    },

    {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */'@/views/Pages/Dashboard/Dashboard.vue'),
        children: [
            {
                component: () => import(/* webpackChunkName: "Dashboard Index" */ '@/views/Pages/Dashboard/Dashboard.vue'),
                path: '',
                name: 'dashboard.index',
                meta: {
                    layout: "admin",
                }
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;




