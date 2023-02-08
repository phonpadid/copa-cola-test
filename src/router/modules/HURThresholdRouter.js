const moduleRouter = {
    path: '/HUR-threshold',
    component: () => import(/* webpackChunkName: "HUR Threshold" */'@/views/pages/HURThreshold/HURThreshold.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "HUR Threshold Index" */ '@/views/pages/HURThreshold/index.vue'),
            path: '',
            name: 'HURThreshold.index',
            meta: {
                title: "HUR Threshold Info",
                name: "HUR Threshold Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "HUR Threshold Create" */ '@/views/pages/HURThreshold/TabItems/manage.vue'),
            path: 'create',
            name: 'HURThreshold.create',
            meta: {
                title: "HUR Threshold Info",
                name: "HUR Threshold Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "HUR Threshold Update" */ '@/views/pages/HURThreshold/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'HURThreshold.edit',
            meta: {
                title: "HUR Threshold Info",
                name: "HUR Threshold Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

