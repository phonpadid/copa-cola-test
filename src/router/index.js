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
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;




