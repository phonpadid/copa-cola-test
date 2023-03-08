const moduleRouter = {
    path: '/exchange-rate',
    component: () => import(/* webpackChunkName: "Exchange Rate" */'@/views/pages/settlement/List/exchangeRate/exchangeRate.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/settlement/List/exchangeRate/index.vue'),
            path: '',
            name: 'exchange-rate.index',
            meta: {
                title: "Exchange Rate Info",
                name: "Exchange Rate Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Exchange Rate Create" */ '@/views/pages/settlement/List/exchangeRate/TabItems/manage.vue'),
            path: 'create',
            name: 'exchange-rate.create',
            meta: {
                title: "Exchange Rate Info",
                name: "Exchange Rate Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Exchange Rate Update" */ '@/views/pages/settlement/List/exchangeRate/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'exchange-rate.edit',
            meta: {
                title: "Exchange Rate Info",
                name: "Exchange Rate Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

