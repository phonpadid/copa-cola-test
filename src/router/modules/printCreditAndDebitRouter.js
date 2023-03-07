const moduleRouter = {
    path: '/print-credit-and-debit',
    component: () => import(/* webpackChunkName: "Print Credit And Debit" */'@/views/pages/settlement/creditAndDebit/printCreditAndDebit/printCreditAndDebit.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Print Credit And Debit Index" */ '@/views/pages/settlement/creditAndDebit/printCreditAndDebit/index.vue'),
            path: '',
            name: 'print-credit-and-debit.index',
            meta: {
                title: "PrintCredit And Debit Info",
                name: "PrintCredit And Debit Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Print Credit And Debit Index Create" */ '@/views/pages/settlement/creditAndDebit/printCreditAndDebit/TabItems/manage.vue'),
            path: 'create',
            name: 'print-credit-and-debit.create',
            meta: {
                title: "PrintCredit And Debit Info",
                name: "PrintCredit And Debit Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Print Credit And Debit Index Update" */ '@/views/pages/settlement/creditAndDebit/printCreditAndDebit/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'adjustment-voice.edit',
            meta: {
                title: "PrintCredit And Debit Info",
                name: "PrintCredit And Debit Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

