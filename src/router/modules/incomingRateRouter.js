const moduleRouter = {
    path: '/incoming-rate',
    component: () => import(/* webpackChunkName: "Partner" */'@/views/pages/configTariff/incomingRate/incomingRate.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/configTariff/incomingRate/index.vue'),
            path: '',
            name: 'incomingRate.index',
            meta: {
                title: "IncomingRate Info",
                name: "IncomingRate Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "IncomingRate Create" */ '@/views/pages/configTariff/incomingRate/TabItems/manage.vue'),
            path: 'create',
            name: 'incomingRate.create',
            meta: {
                title: "IncomingRate Info",
                name: "IncomingRate Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "IncomingRate Update" */ '@/views/pages/configTariff/incomingRate/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'incomingRate.edit',
            meta: {
                title: "IncomingRate Info",
                name: "IncomingRate Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

