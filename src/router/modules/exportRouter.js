const moduleRouter = {
    path: '/export',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/export/export.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/export/TabItems/manage.vue'),
            path: '',
            name: 'export.index',
            meta: {
                title: "ລາຍງານ",
                name: "Export Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/export/TabItems/manage.vue'),
            path: 'create',
            name: 'export.create',
            meta: {
                title: "ລາຍງານ",
                name: "Export Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/export/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'export.edit',
            meta: {
                title: "ລາຍງານ",
                name: "Export Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

