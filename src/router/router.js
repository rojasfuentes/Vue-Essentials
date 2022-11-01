import { createRouter, createWebHashHistory } from "vue-router";

/* import Home from "@/modules/pokemon/pages/Home.vue";
import About from "@/modules/pokemon/pages/About.vue";
import PokemonPage from "@/modules/pokemon/pages/PokemonPage.vue";
 */
import NotPageFound from "@/modules/shared/pages/NotPageFound.vue";
import isAuthenticatedGuard from "./auth-guard";

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
        beforeEnter: [isAuthenticatedGuard()],
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

//Guard para proteger rutas
//GUAD GLOBAL - SINCRONO

//to - ruta a la que se quiere ir
//from - ruta de donde viene
//next - función que se ejecuta para continuar con la navegación


//NO OCUPAMOS ESTE GUARD #######################################
/* router.beforeEach((to, from, next) => {
    console.log( { to, from, next });
    
    const random = Math.random() * 100;
    if (random > 50) {
        console.log("Acceso permitido");
        next();
    } else {
        console.log("Acceso denegado");
        next({ name: "pokemon-about" });
    }
});

############################################### */

const canAccess = () => {
    return new Promise((resolve) => {
        const random = Math.random() * 100;
        if (random > 50) {
            console.log("Acceso permitido");
            resolve(true);
        } else {
            console.log("Acceso denegado");
            resolve(false);
        }
    });
};

router.beforeEach(async (to, from, next) => {

    const autorized = await canAccess();
    autorized 
    ? next() 
    : next({ name: "pokemon-about" });
});

export default router;