const moduleRouter = {
    path: '/match',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/match/match.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/match/index.vue'),
            path: '',
            name: 'match.index',
            meta: {
                title: "ຈັດການແມັດ",
                name: "Match Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/match/TabItems/manage.vue'),
            path: 'create',
            name: 'match.create',
            meta: {
                title: "Match Info",
                name: "Match Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/match/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'match.edit',
            meta: {
                title: "Match Info",
                name: "Match Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

