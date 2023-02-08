const moduleRouter = {
    path: '/office',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/office/office.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/office/index.vue'),
            path: '',
            name: 'office.index',
            meta: {
                title: "Office Info",
                name: "Office Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/office/TabItems/manage.vue'),
            path: 'create',
            name: 'office.create',
            meta: {
                title: "Office Info",
                name: "Office Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

