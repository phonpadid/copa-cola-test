const moduleRouter = {
    path: '/test',
    component: () => import(/* webpackChunkName: "Product" */'@/views/Pages/Test/test.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Product Index" */ '@/views/Pages/Test/index.vue'),
            path: '',
            name: 'test.index',
            meta: {
                title: "Main Title",
                name: "Sub Title",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Product Manage" */ '@/views/Pages/Test/TabItems/Manage'),
            path: 'create',
            name: 'test.create',
            meta: {
                title: "Main Title",
                name: "Sub Title",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

