const moduleRouter = {
    path: '/incoming-rate-sms',
    component: () => import(/* webpackChunkName: "incomingRateSMS" */'@/views/pages/configTariff/incomingRateSMS/incomingRateSMS.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "incomingRateSMS Index" */ '@/views/pages/configTariff/incomingRateSMS/index.vue'),
            path: '',
            name: 'incomingRateSMS.index',
            meta: {
                title: "IncomingRateSMS Info",
                name: "IncomingRateSMS Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "incomingRateSMS Create" */ '@/views/pages/configTariff/incomingRateSMS/TabItems/manage.vue'),
            path: 'create',
            name: 'incomingRateSMS.create',
            meta: {
                title: "IncomingRateSMS Info",
                name: "IncomingRateSMS Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "incomingRateSMS Update" */ '@/views/pages/configTariff/incomingRateSMS/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'incomingRateSMS.edit',
            meta: {
                title: "IncomingRateSMS Info",
                name: "IncomingRateSMS Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

