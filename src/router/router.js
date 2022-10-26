import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/modules/pokemon/pages/Home.vue";
import About from "@/modules/pokemon/pages/About.vue";
import PokemonPage from "@/modules/pokemon/pages/PokemonPage.vue";

import NotPageFound from "@/modules/shared/pages/NotPageFound.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/id", name: "PokemonPage", component: PokemonPage },
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotPageFound}
    //:pathMatch(.*)* es un wildcard para que cualquier ruta que no exista, redirija a Home
    //wildcard es un comodín que permite que cualquier ruta que no exista, redirija a Home
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;