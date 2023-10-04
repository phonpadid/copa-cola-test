const moduleRouter = {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/Dashboard/dashboard.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/Dashboard/index.vue'),
            path: '',
            name: 'dashboard.index',
            meta: {
                title: "Dashboard",
                name: "Dashboard Info",
                layout: "admin",
            }
        },
        // {
        //     component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/match/TabItems/manage.vue'),
        //     path: 'create',
        //     name: 'match.create',
        //     meta: {
        //         title: "Match Info",
        //         name: "Match Info",
        //         layout: "admin",
        //     }
        // },
        // {
        //     component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/match/TabItems/manage.vue'),
        //     path: 'update/:id',
        //     name: 'match.edit',
        //     meta: {
        //         title: "Match Info",
        //         name: "Match Info",
        //         layout: "admin",
        //     }
        // },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

