const moduleRouter = {
    path: '/partner',
    component: () => import(/* webpackChunkName: "Partner" */'@/views/pages/setting/partner/partner.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/setting/partner/index.vue'),
            path: '',
            name: 'partner.index',
            meta: {
                title: "Partner Info",
                name: "Partner Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Partner Create" */ '@/views/pages/setting/partner/TabItems/manage.vue'),
            path: 'create',
            name: 'partner.create',
            meta: {
                title: "Partner Info",
                name: "Partner Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Partner Update" */ '@/views/pages/setting/partner/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'partner.edit',
            meta: {
                title: "Partner Info",
                name: "Partner Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

