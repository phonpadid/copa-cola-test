const moduleRouter = {
    path: '/user',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/user/User.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/user/index.vue'),
            path: '',
            name: 'user.index',
            meta: {
                title: "ຈັດການຜູ້ໃຊ້",
                name: "User Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/user/TabItems/manage.vue'),
            path: 'create',
            name: 'user.create',
            meta: {
                title: "User Info",
                name: "User Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/user/TabItems/manage.vue'),
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

