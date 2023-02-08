const moduleRouter = {
    path: '/reconcile-CDRs-OG',
    component: () => import(/* webpackChunkName: "Reconcile CDRs OG" */'@/views/pages/reconcile/reconcileCDROG/reconcileCDROG.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Reconcile CDRs OG Index" */ '@/views/pages/reconcile/reconcileCDROG/index.vue'),
            path: '',
            name: 'reconcileCDRsOG.index',
            meta: {
                title: "Reconcile CDRs OG",
                name: "Reconcile CDRs OG",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Reconcile CDRs OG Create" */ '@/views/pages/reconcile/reconcileCDROG/TabItems/manage.vue'),
            path: 'create',
            name: 'reconcileCDRsOG.create',
            meta: {
                title: "Reconcile CDRs OG",
                name: "Reconcile CDRs OG",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Reconcile CDRs OG Update" */ '@/views/pages/reconcile/reconcileCDROG/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'reconcileCDRsOG.edit',
            meta: {
                title: "Reconcile CDRs OG",
                name: "Reconcile CDRs OG",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

