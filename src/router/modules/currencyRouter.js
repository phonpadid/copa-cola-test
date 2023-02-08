const moduleRouter = {
    path: '/currency',
    component: () => import(/* webpackChunkName: "Partner" */'@/views/pages/configTariff/currency/currency.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/configTariff/currency/index.vue'),
            path: '',
            name: 'currency.index',
            meta: {
                title: "Currency Info",
                name: "Currency Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Currency Create" */ '@/views/pages/configTariff/currency/TabItems/manage.vue'),
            path: 'create',
            name: 'currency.create',
            meta: {
                title: "Currency Info",
                name: "Currency Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Currency Update" */ '@/views/pages/configTariff/currency/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'currency.edit',
            meta: {
                title: "Currency Info",
                name: "Currency Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

