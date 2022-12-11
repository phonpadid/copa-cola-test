import {createWebHistory, createRouter} from "vue-router";
import * as vueRouter from 'vue-router';
import Middleware from "../middleware/index.js";
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
        path: '/',
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
                    title: "Dashboard Analysis",
                    name: "Dashboard Analysis",
                    middleware: [Middleware.auth]
                }
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

function nextCheck(context, middleware, index) {
    const nextMiddleware = middleware[index];

    if (!nextMiddleware) return context.next;

    return (...parameters) => {
        context.next(...parameters);
        const nextMidd = nextCheck(context, middleware, index + 1);

        nextMiddleware({...context, nextMidd});
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]
        const ctx = {
            from,
            next,
            router,
            to
        }
        const nextMiddleware = nextCheck(ctx, middleware, 1);
        return middleware[0]({...ctx, nextMiddleware});
    }
    return next();
})
export default router;




