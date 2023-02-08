const moduleRouter = {
    path: '/voice-CDRs-report',
    component: () => import(/* webpackChunkName: "Voice CDRs" */'@/views/pages/CDRsExport/voiceCDRs/voiceCDRs.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Voice CDRs Index" */ '@/views/pages/CDRsExport/voiceCDRs/index.vue'),
            path: '',
            name: 'voiceCDRs.index',
            meta: {
                title: "Voice CDRs",
                name: "Voice CDRs",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Voice CDRs Create" */ '@/views/pages/CDRsExport/voiceCDRs/TabItems/manage.vue'),
            path: 'create',
            name: 'voiceCDRs.create',
            meta: {
                title: "Voice CDRs",
                name: "Voice CDRs",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Voice CDRs Manage" */ '@/views/pages/CDRsExport/voiceCDRs/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'voiceCDRs.edit',
            meta: {
                title: "Voice CDRs",
                name: "Voice CDRs",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

