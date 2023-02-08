const moduleRouter = {
    path: '/list-of-route-country',
    component: () => import(/* webpackChunkName: "listRouteCountry" */'@/views/pages/setting/listOfRouteCountry/lisOfRouteCountry.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "listRouteCountry Index" */ '@/views/pages/setting/listOfRouteCountry/index.vue'),
            path: '',
            name: 'listRouteCountry.index',
            meta: {
                title: "List Of Route Country",
                name: "List Of Route Country",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "listRouteCountry Create" */ '@/views/pages/setting/listOfRouteCountry/TabItems/manage.vue'),
            path: 'create',
            name: 'listRouteCountry.create',
            meta: {
                title: "List Of Route Country",
                name: "List Of Route Country",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "listRouteCountry Update" */ '@/views/pages/setting/listOfRouteCountry/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'listRouteCountry.edit',
            meta: {
                title: "List Of Route Country",
                name: "List Of Route Country",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

