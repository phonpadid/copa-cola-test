const moduleRouter = {
    path: '/list-of-route-voice',
    component: () => import(/* webpackChunkName: "listRouteVoice" */'@/views/pages/setting/listOfRouteVoice/lisOfRouteVoice.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "listRouteVoice Index" */ '@/views/pages/setting/listOfRouteVoice/index.vue'),
            path: '',
            name: 'listRouteVoice.index',
            meta: {
                title: "List Of Route Voice",
                name: "List Of Route Voice",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "listRouteVoice Create" */ '@/views/pages/setting/listOfRouteVoice/TabItems/manage.vue'),
            path: 'create',
            name: 'listRouteVoice.create',
            meta: {
                title: "List Of Route Voice",
                name: "List Of Route Voice",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "listRouteVoice Update" */ '@/views/pages/setting/listOfRouteVoice/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'listRouteVoice.edit',
            meta: {
                title: "List Of Route Voice",
                name: "List Of Route Voice",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

