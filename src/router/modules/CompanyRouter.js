const moduleRouter = {
    path: '/company',
    component: () => import(/* webpackChunkName: "Company" */'@/views/Pages/Company/Company.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Company Index" */ '@/views/Pages/Company/Index.vue'),
            path: '',
            name: 'company.index',
            meta: {
                title: "Company Info",
                name: "Company Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

