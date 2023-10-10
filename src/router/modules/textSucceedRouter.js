const moduleRouter = {
    path: '/textsucceed',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/TextSucceed/textsucceed.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/TextSucceed/TabItems/manage.vue'),
            path: '',
            name: 'textsucceed.index',
            meta: {
                title: "ຈັດການຊຸດຂໍ້ຄວາມ",
                name: "TextSucceed Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/TextSucceed/TabItems/manage.vue'),
            path: 'create',
            name: 'textsucceed.create',
            meta: {
                title: "ຈັດການຊຸດຂໍ້ຄວາມ",
                name: "TextSucceed Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/TextSucceed/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'textsucceed.edit',
            meta: {
                title: "ຈັດການຊຸດຂໍ້ຄວາມ",
                name: "TextSucceed Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

