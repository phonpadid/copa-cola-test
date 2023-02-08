const moduleRouter = {
    path: '/user',
    component: () => import(/* webpackChunkName: "Partner" */'@/views/pages/system/user/user.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Partner Index" */ '@/views/pages/system/user/index.vue'),
            path: '',
            name: 'user.index',
            meta: {
                title: "User Info",
                name: "User Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "User Create" */ '@/views/pages/system/user/TabItems/manage.vue'),
            path: 'create',
            name: 'user.create',
            meta: {
                title: "User Info",
                name: "User Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "User Update" */ '@/views/pages/system/user/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'user.edit',
            meta: {
                title: "User Info",
                name: "User Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

