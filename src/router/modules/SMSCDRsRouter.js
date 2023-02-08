const moduleRouter = {
    path: '/SMS-CDRs-report',
    component: () => import(/* webpackChunkName: "SMS CDRs" */'@/views/pages/CDRsExport/SMSCDRs/SMSCDRs.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "SMS CDRs Index" */ '@/views/pages/CDRsExport/SMSCDRs/index.vue'),
            path: '',
            name: 'SMS-CDRs.index',
            meta: {
                title: "SMS CDRs",
                name: "SMS CDRs",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "SMS CDRs Create" */ '@/views/pages/CDRsExport/SMSCDRs/TabItems/manage.vue'),
            path: 'create',
            name: 'SMS-CDRs.create',
            meta: {
                title: "SMS CDRs",
                name: "SMS CDRs",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "SMS CDRs Manage" */ '@/views/pages/CDRsExport/SMSCDRs/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'SMS-CDRs.edit',
            meta: {
                title: "SMS CDRs",
                name: "SMS CDRs",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

