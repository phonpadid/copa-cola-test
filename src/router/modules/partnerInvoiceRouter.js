const moduleRouter = {
    path: '/partner-invoice',
    component: () => import(/* webpackChunkName: "Partner Invoice" */'@/views/pages/settlement/listOfInvoice/partnerInvoice/partnerInvoice.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Invoice Index" */ '@/views/pages/settlement/listOfInvoice/partnerInvoice/index.vue'),
            path: '',
            name: 'partner-invoice.index',
            meta: {
                title: "Partner Invoice Info",
                name: "Partner Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Partner Invoice Create" */ '@/views/pages/settlement/listOfInvoice/partnerInvoice/TabItems/manage.vue'),
            path: 'create',
            name: 'partner-invoice.create',
            meta: {
                title: "Partner Invoice Info",
                name: "Partner Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Partner Invoice Update" */ '@/views/pages/settlement/listOfInvoice/partnerInvoice/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'partner-invoice.edit',
            meta: {
                title: "Partner Invoice Info",
                name: "Partner Invoice Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

