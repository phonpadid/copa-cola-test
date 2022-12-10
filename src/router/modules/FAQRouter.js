const moduleRouter = {
    path: '/frequently-asked-question',
    component: () => import(/* webpackChunkName: "FAQ" */'@/views/Pages/FAQ/FAQ.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "FAQ Index" */ '@/views/Pages/FAQ/Index.vue'),
            path: '',
            name: 'FAQ.index',
            meta: {
                title: "Frequently Asked Question",
                name: "Frequently Asked Question",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "FAQ Manage" */ '@/views/Pages/FAQ/TabItem/Manage.vue'),
            path: 'create',
            name: 'FAQ.create',
            meta: {
                title: "Frequently Asked Question",
                name: "Frequently Asked Question",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

