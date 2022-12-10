import Middleware from "@/middleware";

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
                tab: '1',
                middleware: [Middleware.auth]
            }
        },
        {
            component: () => import(/* webpackChunkName: "Career Index" */ '@/views/Pages/Activity/Index.vue'),
            path: '/activity-and-career',
            name: 'career.index',
            meta: {
                title: "Activity and Career",
                name: "Activity and Career",
                layout: "admin",
                tab: '2',
                middleware: [Middleware.auth]
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
                middleware: [Middleware.auth]
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
                middleware: [Middleware.auth]
            }
        },
        {
            component: () => import(/* webpackChunkName: "Activity Detail" */ '@/views/Pages/Activity/TabItem/ActivityDetail.vue'),
            path: 'activity-detail/:activity_id',
            name: 'activity.detail',
            meta: {
                title: "Activity Detail",
                name: "Activity Detail",
                layout: "admin",
                middleware: [Middleware.auth]
            }
        },
        {
            component: () => import(/* webpackChunkName: "Career Detail" */ '@/views/Pages/Activity/TabItem/CareerDetail.vue'),
            path: 'career-detail/:career_id',
            name: 'career.detail',
            meta: {
                title: "Career Detail",
                name: "Career Detail",
                layout: "admin",
                middleware: [Middleware.auth]
            }
        },

    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

