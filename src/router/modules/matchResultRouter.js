const moduleRouter = {
    path: '/matchresult',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/matchResult/match.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/matchResult/index.vue'),
            path: '',
            name: 'matchresult.index',
            meta: {
                title: "ຈັດການຜົນການແຂ່ງຂັນ",
                name: "MatchResult Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/matchResult/TabItems/manage.vue'),
            path: 'create',
            name: 'matchresult.create',
            meta: {
                title: "MatchResult Info",
                name: "MatchResult Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/matchResult/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'matchresult.edit',
            meta: {
                title: "MatchResult Info",
                name: "MatchResult Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

