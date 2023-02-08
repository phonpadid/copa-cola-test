const moduleRouter = {
    path: '/out-going-rate',
    component: () => import(/* webpackChunkName: "OutGoingRate" */'@/views/pages/configTariff/outGoingRate/outGoingRate.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "OutGoingRate Index" */ '@/views/pages/configTariff/outGoingRate/index.vue'),
            path: '',
            name: 'outGoingRate.index',
            meta: {
                title: "OutGoingRate Info",
                name: "OutGoingRate Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "OutGoingRate Create" */ '@/views/pages/configTariff/outGoingRate/TabItems/manage.vue'),
            path: 'create',
            name: 'outGoingRate.create',
            meta: {
                title: "OutGoingRate Info",
                name: "OutGoingRate Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "OutGoingRate Update" */ '@/views/pages/configTariff/outGoingRate/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'outGoingRate.edit',
            meta: {
                title: "OutGoingRate Info",
                name: "OutGoingRate Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

