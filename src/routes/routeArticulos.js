const {Router} = require ("express");
const routeArticulos = Router();
const {
    obtenerArticulos,
    obtenerArticuloPorId,
    crearArticulo,
    actualizarArticulo,
    eliminarArticulo,
  } = require("../controllers/articulosController");

  routeArticulos.get("/", obtenerArticulos);
  routeArticulos.get("/:id", obtenerArticuloPorId);
  routeArticulos.post("/", crearArticulo);
  routeArticulos.put("/:id", actualizarArticulo);
  routeArticulos.delete("/:id", eliminarArticulo);

module.exports = routeArticulos;
