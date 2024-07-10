import { createWebHistory, createRouter } from "vue-router";
import Index from "../views/Index.vue";
import Work from "../views/Work.vue";
import Contact from "../views/Contact.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Index,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/work",
        name: "Work",
        component: Work,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;