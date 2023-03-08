const moduleRouter = {
    path: '/view-and-export-invoice',
    component: () => import(/* webpackChunkName: "View And Export Invoice" */'@/views/pages/settlement/listOfInvoice/viewAndExportInvoice/viewAndExportInvoice.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "View And Export Invoice Index" */ '@/views/pages/settlement/listOfInvoice/viewAndExportInvoice/index.vue'),
            path: '',
            name: 'view-and-export-invoice.index',
            meta: {
                title: "View And Export Invoice Info",
                name: "View And Export Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "View And Export Invoice Create" */ '@/views/pages/settlement/listOfInvoice/viewAndExportInvoice/TabItems/manage.vue'),
            path: 'create',
            name: 'view-and-export-invoice.create',
            meta: {
                title: "View And Export Invoice Info",
                name: "View And Export Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "View And Export Invoice Update" */ '@/views/pages/settlement/listOfInvoice/viewAndExportInvoice/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'view-and-export-invoice.edit',
            meta: {
                title: "View And Export Invoice Info",
                name: "View And Export Invoice Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

