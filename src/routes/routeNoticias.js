const {Router} = require ("express");
const routeNoticias = Router();
const {  
    obtenerNoticias,
    obtenerNoticiaPorId,
    crearNoticia,
    actualizarNoticia,
    eliminarNoticia
} = require("../controllers/noticiasController");

routeNoticias.get("/", obtenerNoticias);
routeNoticias.get("/:id", obtenerNoticiaPorId);
routeNoticias.post("/", crearNoticia);
routeNoticias.put("/:id", actualizarNoticia);
routeNoticias.delete("/:id", eliminarNoticia);

module.exports = routeNoticias;
