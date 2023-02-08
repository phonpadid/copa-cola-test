const moduleRouter = {
    path: '/reconcile-CDRs-IC',
    component: () => import(/* webpackChunkName: "Reconcile CDRs IC" */'@/views/pages/reconcile/reconcileCDRIC/reconcileCDRIC.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Reconcile CDRs IC Index" */ '@/views/pages/reconcile/reconcileCDRIC/index.vue'),
            path: '',
            name: 'reconcileCDRsIC.index',
            meta: {
                title: "Reconcile CDRs IC",
                name: "Reconcile CDRs IC",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Reconcile CDRs IC Create" */ '@/views/pages/reconcile/reconcileCDRIC/TabItems/manage.vue'),
            path: 'create',
            name: 'reconcileCDRsIC.create',
            meta: {
                title: "Reconcile CDRs IC",
                name: "Reconcile CDRs IC",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Reconcile CDRs IC Update" */ '@/views/pages/reconcile/reconcileCDRIC/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'reconcileCDRsIC.edit',
            meta: {
                title: "Reconcile CDRs IC",
                name: "Reconcile CDRs IC",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

