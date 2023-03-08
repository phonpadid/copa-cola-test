const moduleRouter = {
    path: '/bank-account',
    component: () => import(/* webpackChunkName: "BankAccount" */'@/views/pages/settlement/List/bankAccount/bankAccount.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/settlement/List/bankAccount/index.vue'),
            path: '',
            name: 'bank-account.index',
            meta: {
                title: "BankAccount Info",
                name: "BankAccount Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "BankAccount Create" */ '@/views/pages/settlement/List/bankAccount/TabItems/manage.vue'),
            path: 'create',
            name: 'bank-account.create',
            meta: {
                title: "BankAccount Info",
                name: "BankAccount Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "BankAccount Update" */ '@/views/pages/settlement/List/bankAccount/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'bank-account.edit',
            meta: {
                title: "BankAccount Info",
                name: "BankAccount Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

