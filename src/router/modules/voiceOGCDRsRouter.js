const moduleRouter = {
    path: '/voice-OG-CDRs-report',
    component: () => import(/* webpackChunkName: "Voice OG CDRs" */'@/views/pages/CDRsExport/voiceOGCDRs/voiceOGCDRs.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Voice OG CDRs Index" */ '@/views/pages/CDRsExport/voiceOGCDRs/index.vue'),
            path: '',
            name: 'voiceOGCDRs.index',
            meta: {
                title: "Voice OG CDRs",
                name: "Voice OG CDRs",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Voice OG CDRs Create" */ '@/views/pages/CDRsExport/voiceOGCDRs/TabItems/manage.vue'),
            path: 'create',
            name: 'voiceOGCDRs.create',
            meta: {
                title: "Voice OG CDRs",
                name: "Voice OG CDRs",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Voice OG CDRs Manage" */ '@/views/pages/CDRsExport/voiceOGCDRs/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'voiceOGCDRs.edit',
            meta: {
                title: "Voice OG CDRs",
                name: "Voice OG CDRs",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

