const moduleRouter = {
    path: '/operator',
    component: () => import(/* webpackChunkName: "Operator" */'@/views/pages/setting/operator/operator.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Operator Index" */ '@/views/pages/setting/operator/index.vue'),
            path: '',
            name: 'operator.index',
            meta: {
                title: "Operator Info",
                name: "Operator Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Operator Create" */ '@/views/pages/setting/operator/TabItems/manage.vue'),
            path: 'create',
            name: 'operator.create',
            meta: {
                title: "Operator Info",
                name: "Operator Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Operator Update" */ '@/views/pages/setting/operator/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'operator.edit',
            meta: {
                title: "Operator Info",
                name: "Operator Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

