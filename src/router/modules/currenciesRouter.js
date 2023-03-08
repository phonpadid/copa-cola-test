const moduleRouter = {
    path: '/currencies',
    component: () => import(/* webpackChunkName: "Currencies" */'@/views/pages/settlement/List/currencies/currencies.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/settlement/List/currencies/index.vue'),
            path: '',
            name: 'currencies.index',
            meta: {
                title: "Currencies Info",
                name: "Currencies Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Currencies Create" */ '@/views/pages/settlement/List/currencies/TabItems/manage.vue'),
            path: 'create',
            name: 'currencies.create',
            meta: {
                title: "Currencies Info",
                name: "Currencies Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Currencies Update" */ '@/views/pages/settlement/List/currencies/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'currencies.edit',
            meta: {
                title: "Currencies Info",
                name: "Currencies Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

