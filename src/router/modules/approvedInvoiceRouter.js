const moduleRouter = {
    path: '/approved',
    component: () => import(/* webpackChunkName: "Approved" */'@/views/pages/settlement/listOfInvoice/approvedInvoice/approvedInvoice.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Approved Index" */ '@/views/pages/settlement/listOfInvoice/approvedInvoice/index.vue'),
            path: '',
            name: 'approved.index',
            meta: {
                title: "Approved Info",
                name: "Approved Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Approved Create" */ '@/views/pages/settlement/listOfInvoice/approvedInvoice/TabItems/manage.vue'),
            path: 'create',
            name: 'approved.create',
            meta: {
                title: "Approved Info",
                name: "Approved Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Approved Update" */ '@/views/pages/settlement/listOfInvoice/approvedInvoice/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'approved.edit',
            meta: {
                title: "Approved Info",
                name: "Approved Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

