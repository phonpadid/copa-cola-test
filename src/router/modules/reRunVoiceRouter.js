const moduleRouter = {
    path: '/re-run-voice',
    component: () => import(/* webpackChunkName: "Re-Run Voice" */'@/views/pages/re-run-AllReport/reRunVoice/reRunVoice.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Re-Run Voice Index" */ '@/views/pages/re-run-AllReport/reRunVoice/index.vue'),
            path: '',
            name: 'reRunVoice.index',
            meta: {
                title: "Re-Run Voice",
                name: "Re-Run Voice",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Re-Run Voice Create" */ '@/views/pages/re-run-AllReport/reRunVoice/TabItems/manage.vue'),
            path: 'create',
            name: 'reRunVoice.create',
            meta: {
                title: "Re-Run Voice",
                name: "Re-Run Voice",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Re-Run Voice Manage" */ '@/views/pages/re-run-AllReport/reRunVoice/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'reRunVoice.edit',
            meta: {
                title: "Re-Run Voice",
                name: "Re-Run Voice",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

