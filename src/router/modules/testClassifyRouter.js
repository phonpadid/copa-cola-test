const moduleRouter = {
    path: '/test-classify',
    component: () => import(/* webpackChunkName: "TestClassify" */'@/views/pages/configTariff/testClassify/testClassify.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "TestClassify Index" */ '@/views/pages/configTariff/testClassify/index.vue'),
            path: '',
            name: 'testClassify.index',
            meta: {
                title: "TestClassify Info",
                name: "TestClassify Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "TestClassify Create" */ '@/views/pages/configTariff/testClassify/TabItems/manage.vue'),
            path: 'create',
            name: 'testClassify.create',
            meta: {
                title: "TestClassify Info",
                name: "TestClassify Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "TestClassify Update" */ '@/views/pages/configTariff/testClassify/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'testClassify.edit',
            meta: {
                title: "TestClassify Info",
                name: "TestClassify Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

