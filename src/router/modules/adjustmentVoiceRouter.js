const moduleRouter = {
    path: '/adjustment-voice',
    component: () => import(/* webpackChunkName: "AdjustmentVoice" */'@/views/pages/settlement/creditAndDebit/adjustmentVoice/adjustmentVoice.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/settlement/creditAndDebit/adjustmentVoice/index.vue'),
            path: '',
            name: 'adjustment-voice.index',
            meta: {
                title: "AdjustmentVoice Info",
                name: "AdjustmentVoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "AdjustmentVoice Create" */ '@/views/pages/settlement/creditAndDebit/adjustmentVoice/TabItems/manage.vue'),
            path: 'create',
            name: 'adjustment-voice.create',
            meta: {
                title: "AdjustmentVoice Info",
                name: "AdjustmentVoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "AdjustmentVoice Update" */ '@/views/pages/settlement/creditAndDebit/adjustmentVoice/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'adjustment-voice.edit',
            meta: {
                title: "AdjustmentVoice Info",
                name: "AdjustmentVoice Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

