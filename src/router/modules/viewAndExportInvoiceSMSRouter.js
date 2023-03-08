const moduleRouter = {
    path: '/view-and-export-invoice-sms',
    component: () => import(/* webpackChunkName: "View And Export Invoice" */'@/views/pages/settlement/listOfInvoiceSMS/viewAndExportInvoiceSMS/viewAndExportInvoiceSMS.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "View And Export Invoice Index" */ '@/views/pages/settlement/listOfInvoiceSMS/viewAndExportInvoiceSMS/index.vue'),
            path: '',
            name: 'view-and-export-invoice-sms.index',
            meta: {
                title: "View And Export Invoice SMS",
                name: "View And Export Invoice SMS",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "View And Export Invoice Create" */ '@/views/pages/settlement/listOfInvoiceSMS/viewAndExportInvoiceSMS/TabItems/manage.vue'),
            path: 'create',
            name: 'view-and-export-invoice-sms.create',
            meta: {
                title: "View And Export Invoice SMS",
                name: "View And Export Invoice SMS",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "View And Export Invoice Update" */ '@/views/pages/settlement/listOfInvoiceSMS/viewAndExportInvoiceSMS/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'view-and-export-invoice-sms.edit',
            meta: {
                title: "View And Export Invoice SMS",
                name: "View And Export Invoice SMS",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

