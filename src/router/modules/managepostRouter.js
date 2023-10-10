const moduleRouter = {
    path: '/manageposts',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/managePost/post.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/managePost/index.vue'),
            path: '',
            name: 'manageposts.index',
            meta: {
                title: "ສະແດງລາຍການໂພສ ແລະ ຈັບຄູ່ແມັດ",
                name: "Manageposts Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/managePost/TabItems/manage.vue'),
            path: 'create',
            name: 'manageposts.create',
            meta: {
                title: "ເພີມຂໍ້ມູນໂພສ ແລະ ຈັບຄູ່ແມັດ",
                name: "Manageposts Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/managePost/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'manageposts.edit',
            meta: {
                title: "ອັບເດດຂໍ້ມູນໂພສ ແລະ ຈັບຄູ່ແມັດ",
                name: "Manageposts Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

