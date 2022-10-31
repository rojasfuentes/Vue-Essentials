import { createRouter, createWebHashHistory } from "vue-router";

/* import Home from "@/modules/pokemon/pages/Home.vue";
import About from "@/modules/pokemon/pages/About.vue";
import PokemonPage from "@/modules/pokemon/pages/PokemonPage.vue";
 */
import NotPageFound from "@/modules/shared/pages/NotPageFound.vue";

const routes = [
   
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: "/pokemon",
        name: "pokemon",
        component: () => import(/* webpackChunkName: "PokemonLayout" */"@/modules/pokemon/layouts/PokemonLayout.vue"),
        children: [
            {
                path: "home", 
                name: "pokemon-home",
                component: () => import(/* webpackChunkName: "HomePage" */"@/modules/pokemon/pages/Home.vue")
            },
            {
                path: "about",
                name: "pokemon-about",
                component: () => import(/* webpackChunkName: "AboutPage" */"@/modules/pokemon/pages/About.vue")
            },
            //webpackChunkName sirve para que sepa que es un chunk y lo cargue en el momento que se necesite
            {
                path: "pokemonid/:id",
                name: "pokemon-id",
                component: () => import(/* webpackChunkName: "PokemonPage" */"@/modules/pokemon/pages/PokemonPage.vue"),
                props: (route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? { id: 1 } : { id };
                }
            },

           
        ]
    },
    {
        path: "/dbz",
        name: "dbz",
        component: () => import(/* webpackChunkName: "DbzLayout" */"@/modules/dbz/layouts/DBLayout.vue"),
        children: [
            {
                path: "characters",
                name: "dbz-characters",
                component: () => import(/* webpackChunkName: "CharactersPage" */"@/modules/dbz/pages/Characters.vue")
            },
            {
                path: "about",
                name: "dbz-about",
                component: () => import(/* webpackChunkName: "AboutPage" */"@/modules/dbz/pages/About.vue")
            },
        ]


    },

    {
        path: '/:pathMatch(.*)*', name: 'NotFound',
        component: NotPageFound
    }
    //{
    //path: "/home", name: "Home",
    //component: () => import(/* webpackChunkName: "HomePage" */"@/modules/pokemon/pages/Home.vue")
    //},
    //{
    //path: "/about",
    //name: "About",
    //component: () => import(/* webpackChunkName: "AboutPage" */"@/modules/pokemon/pages/About.vue")
    //},
    ////webpackChunkName sirve para que sepa que es un chunk y lo cargue en el momento que se necesite
    //{
    //path: "/pokemonid/:id", 
    //name: "pokemon-id",
    //component: () => import(/* webpackChunkName: "PokemonPage" */"@/modules/pokemon/pages/PokemonPage.vue"),
    //props: (route) => {
    //const id = Number(route.params.id);
    //return isNaN(id) ? { id: 1 } : { id };
    //}
    //},
    //{
    //path: '/:pathMatch(.*)*', name: 'NotFound',
    //component: NotPageFound
    //}
    //:pathMatch(.*)* es un wildcard para que cualquier ruta que no exista, redirija a Home
    //wildcard es un comodín que permite que cualquier ruta que no exista, redirija a Home
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;