import {createWebHistory, createRouter} from "vue-router";
import Index from "../views/Index.vue";
import Photo from "../views/Photo.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Colors from "../views/Colors.vue";
import CityOfAngels from "../views/CityOfAngels.vue";
import Personal from "../views/Personal.vue";
import PlantPortraits from "../views/PlantPortraits.vue";

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
        component: Photo,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/work/colors",
        name: "Colors",
        component: Colors,
    },
    {
        path: "/work/city-of-angels",
        name: "City of Angels",
        component: CityOfAngels,
    },
    {
        path: "/work/personal",
        name: "Personal",
        component: Personal,
    },
    {
        path: "/work/plant-portraits",
        name: "Plant Portraits",
        component: PlantPortraits,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;