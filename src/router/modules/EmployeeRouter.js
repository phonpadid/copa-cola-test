import Middleware from "@/middleware";

const moduleRouter = {
    path: '/employee',
    component: () => import(/* webpackChunkName: "Employee" */'@/views/Pages/Employee/Employee.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Employee Index" */ '@/views/Pages/Employee/Index.vue'),
            path: '',
            name: 'employee.index',
            meta: {
                title: "Employee",
                name: "Employee",
                layout: "admin",
                middleware: [Middleware.auth]
            }
        },
        // {
        //     component: () => import(/* webpackChunkName: "Activity Create" */ '@/views/Pages/Activity/TabItem/Manage.vue'),
        //     path: 'create',
        //     name: 'employee.create',
        //     meta: {
        //         title: "Activity and Career",
        //         name: "Activity and Career",
        //         layout: "admin",
        //         middleware: [Middleware.auth]
        //     }
        // }
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

