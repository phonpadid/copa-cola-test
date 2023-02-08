const moduleRouter = {
    path: '/list-of-route-sms',
    component: () => import(/* webpackChunkName: "listRouteSMS" */'@/views/pages/setting/listOfRouteSMS/lisOfRouteSMS.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "listRouteVoice Index" */ '@/views/pages/setting/listOfRouteSMS/index.vue'),
            path: '',
            name: 'listRouteSMS.index',
            meta: {
                title: "List Of Route SMS",
                name: "List Of Route SMS",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "listRouteVoice Create" */ '@/views/pages/setting/listOfRouteSMS/TabItems/manage.vue'),
            path: 'create',
            name: 'listRouteSMS.create',
            meta: {
                title: "List Of Route SMS",
                name: "List Of Route SMS",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "listRouteVoice Update" */ '@/views/pages/setting/listOfRouteSMS/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'listRouteSMS.edit',
            meta: {
                title: "List Of Route SMS",
                name: "List Of Route SMS",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

