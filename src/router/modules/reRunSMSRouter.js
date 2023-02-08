const moduleRouter = {
    path: '/re-run-sms',
    component: () => import(/* webpackChunkName: "Re-Run SMS" */'@/views/pages/re-run-AllReport/reRunSMS/reRunSMS.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Re-Run SMS Index" */ '@/views/pages/re-run-AllReport/reRunSMS/index.vue'),
            path: '',
            name: 'reRunSMS.index',
            meta: {
                title: "Re-Run SMS",
                name: "Re-Run SMS",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Re-Run SMS Create" */ '@/views/pages/re-run-AllReport/reRunSMS/TabItems/manage.vue'),
            path: 'create',
            name: 'reRunSMS.create',
            meta: {
                title: "Re-Run SMS",
                name: "Re-Run SMS",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Re-Run SMS Manage" */ '@/views/pages/re-run-AllReport/reRunSMS/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'reRunSMS.edit',
            meta: {
                title: "Re-Run SMS",
                name: "Re-Run SMS",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

