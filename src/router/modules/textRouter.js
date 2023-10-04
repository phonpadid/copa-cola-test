const moduleRouter = {
    path: '/text',
    component: () => import(/* webpackChunkName: "Office" */'@/views/pages/system/Text/text.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Office Index" */ '@/views/pages/system/Text/TabItems/manage.vue'),
            path: '',
            name: 'text.index',
            meta: {
                title: "ຈັດການຊຸດຂໍ້ຄວາມ",
                name: "Text Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/Text/TabItems/manage.vue'),
            path: 'create',
            name: 'text.create',
            meta: {
                title: "ຈັດການຊຸດຂໍ້ຄວາມ",
                name: "Text Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Office Create" */ '@/views/pages/system/Text/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'text.edit',
            meta: {
                title: "ຈັດການຊຸດຂໍ້ຄວາມ",
                name: "Text Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

