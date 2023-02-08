import {createWebHistory, createRouter} from "vue-router";
import * as vueRouter from 'vue-router';
import {createApp} from 'vue';

createApp(vueRouter);
const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "Login" */'@/views/pages/common/Login.vue'),
        children: [
            {
                component: () => import(/* webpackChunkName: "Login Index" */ '@/views/pages/common/Login.vue'),
                path: '',
                name: 'login.index',
                meta: {
                    layout: "default",
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




