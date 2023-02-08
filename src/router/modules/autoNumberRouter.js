const moduleRouter = {
    path: '/auto-number',
    component: () => import(/* webpackChunkName: "Auto Number" */'@/views/pages/system/autoNumber/autoNumber.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Auto Number Index" */ '@/views/pages/system/autoNumber/index.vue'),
            path: '',
            name: 'autoNumber.index',
            meta: {
                title: "Auto Number Info",
                name: "Auto Number Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "AutoNumber Create" */ '@/views/pages/system/autoNumber/TabItems/manage.vue'),
            path: 'create',
            name: 'autoNumber.create',
            meta: {
                title: "Auto Number Info",
                name: "Auto Number Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "AutoNumber Update" */ '@/views/pages/system/autoNumber/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'autoNumber.edit',
            meta: {
                title: "Auto Number Info",
                name: "Auto Number Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

