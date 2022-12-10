const moduleRouter = {
    path: '/activity',
    component: () => import(/* webpackChunkName: "Activity" */'@/views/Pages/Activity/Activity.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Activity Index" */ '@/views/Pages/Activity/Index.vue'),
            path: '',
            name: 'activity.index',
            meta: {
                title: "Activity and Career",
                name: "Activity and Career",
                layout: "admin",
                tab: '1'
            }
        },
        {
            component: () => import(/* webpackChunkName: "Career Index" */ '@/views/Pages/Activity/Index.vue'),
            path: '/career',
            name: 'career.index',
            meta: {
                title: "Activity and Career",
                name: "Activity and Career",
                layout: "admin",
                tab: '2'
            }
        },
        {
            component: () => import(/* webpackChunkName: "Activity Create" */ '@/views/Pages/Activity/TabItem/Manage.vue'),
            path: 'create',
            name: 'activity.create',
            meta: {
                title: "Activity and Career",
                name: "Activity and Career",
                layout: "admin",
            }
        },

        {
            component: () => import(/* webpackChunkName: "Career Create" */ '@/views/Pages/Activity/TabItem/ManageCareer.vue'),
            path: 'create-career',
            name: 'career.create',
            meta: {
                title: "Activity and Career",
                name: "Activity and Career",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Activity Detail" */ '@/views/Pages/Activity/TabItem/ActivityDetail.vue'),
            path: 'activity-detail',
            name: 'activity.detail',
            meta: {
                title: "Activity Detail",
                name: "Activity Detail",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Career Detail" */ '@/views/Pages/Activity/TabItem/CareerDetail.vue'),
            path: 'career-detail',
            name: 'career.detail',
            meta: {
                title: "Career Detail",
                name: "Career Detail",
                layout: "admin",
            }
        },

    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

