const moduleRouter = {
    path: '/partner-invoice-sms',
    component: () => import(/* webpackChunkName: "Partner Invoice" */'@/views/pages/settlement/listOfInvoiceSMS/partnerInvoiceSMS/partnerInvoiceSMS.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Invoice Index" */ '@/views/pages/settlement/listOfInvoiceSMS/partnerInvoiceSMS/index.vue'),
            path: '',
            name: 'partner-invoice-sms.index',
            meta: {
                title: "Partner Invoice Info",
                name: "Partner Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Partner Invoice Create" */ '@/views/pages/settlement/listOfInvoiceSMS/partnerInvoiceSMS/TabItems/manage.vue'),
            path: 'create',
            name: 'partner-invoice-sms.create',
            meta: {
                title: "Partner Invoice Info",
                name: "Partner Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Partner Invoice Update" */ '@/views/pages/settlement/listOfInvoiceSMS/partnerInvoiceSMS/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'partner-invoice-sms.edit',
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

