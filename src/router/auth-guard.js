const isAuthenticatedGuard = (to, from, next) => {
    /* console.log( {to, from, next }) */
    
    return new Promise(() => {
        const random = Math.random() * 100;
        if (random > 50) {
            console.log("Acceso permitido");
            next();
        } else {
            console.log("Acceso denegado", random);
            next({ name: "pokemon-about" });
        }
    });
};



export default isAuthenticatedGuard;