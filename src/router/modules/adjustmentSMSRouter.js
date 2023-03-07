const moduleRouter = {
    path: '/adjustment-sms',
    component: () => import(/* webpackChunkName: "AdjustmentSMS" */'@/views/pages/settlement/creditAndDebit/adjustmentSMS/adjustmentSMS.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/settlement/creditAndDebit/adjustmentSMS/index.vue'),
            path: '',
            name: 'adjustment-sms.index',
            meta: {
                title: "AdjustmentSMS Info",
                name: "AdjustmentSMS Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "AdjustmentSMS Create" */ '@/views/pages/settlement/creditAndDebit/adjustmentSMS/TabItems/manage.vue'),
            path: 'create',
            name: 'adjustment-sms.create',
            meta: {
                title: "AdjustmentSMS Info",
                name: "AdjustmentSMS Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "AdjustmentSMS Update" */ '@/views/pages/settlement/creditAndDebit/adjustmentSMS/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'adjustment-sms.edit',
            meta: {
                title: "AdjustmentSMS Info",
                name: "AdjustmentSMS Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

