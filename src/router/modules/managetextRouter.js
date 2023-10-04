const moduleRouter = {
    path: '/managetext',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/manageText/team.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/manageText/index.vue'),
            path: '',
            name: 'managetext.index',
            meta: {
                title: "ຈັດການທີມ",
                name: "ManageText Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/manageText/TabItems/manage.vue'),
            path: 'create',
            name: 'managetext.create',
            meta: {
                title: "ManageText Info",
                name: "ManageText Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/manageText/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'managetext.edit',
            meta: {
                title: "ManageText Info",
                name: "ManageText Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

