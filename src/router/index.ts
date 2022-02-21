import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/category/:name",
        name: "CategoryDetail",
        component: () => import("../views/CategoryDetail.vue"),
    },
    {
        path: "/search/:name",
        name: "SearchResult",
        component: () => import("../views/SearchResult.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
