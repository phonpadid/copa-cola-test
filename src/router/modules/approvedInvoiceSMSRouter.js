const moduleRouter = {
    path: '/approved-sms',
    component: () => import(/* webpackChunkName: "ApprovedSMS" */'@/views/pages/settlement/listOfInvoiceSMS/approvedInvoiceSMS/approvedInvoiceSMS.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Approved Index" */ '@/views/pages/settlement/listOfInvoiceSMS/approvedInvoiceSMS/index.vue'),
            path: '',
            name: 'approved-sms.index',
            meta: {
                title: "ApprovedSMS Info",
                name: "ApprovedSMS Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "ApprovedSMS Create" */ '@/views/pages/settlement/listOfInvoiceSMS/approvedInvoiceSMS/TabItems/manage.vue'),
            path: 'create',
            name: 'approved-sms.create',
            meta: {
                title: "ApprovedSMS Info",
                name: "ApprovedSMS Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "ApprovedSMS Update" */ '@/views/pages/settlement/listOfInvoiceSMS/approvedInvoiceSMS/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'approved-sms.edit',
            meta: {
                title: "ApprovedSMS Info",
                name: "ApprovedSMS Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

