const moduleRouter = {
    path: '/statemt-invoice-validation',
    component: () => import(/* webpackChunkName: "Statement And  Invoice" */'@/views/pages/settlement/listOfInvoice/statemtAndInvoiceValidation/statemtAndInvoiceValidation.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Statement And  Invoice Index" */ '@/views/pages/settlement/listOfInvoice/statemtAndInvoiceValidation/index.vue'),
            path: '',
            name: 'statemt-invoice-validation.index',
            meta: {
                title: "Statement And Invoice",
                name: "Statement And Invoice",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Statement And  Invoice Create" */ '@/views/pages/settlement/listOfInvoice/statemtAndInvoiceValidation/TabItems/manage.vue'),
            path: 'create',
            name: 'statemt-invoice-validation.create',
            meta: {
                title: "Statement And Invoice",
                name: "Statement And Invoice",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Statement And  Invoice Update" */ '@/views/pages/settlement/listOfInvoice/statemtAndInvoiceValidation/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'statemt-invoice-validation.edit',
            meta: {
                title: "Statement And Invoice",
                name: "Statement And Invoice",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

