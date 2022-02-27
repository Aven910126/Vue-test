import { createRouter, createWebHashHistory } from "vue-router";
//import components1 from '../components/components1.vue';
const routes = [{
    path: "/",
    name: "Home",
    component: () =>
        import ("/@/views/Home.vue"),
}, ];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;