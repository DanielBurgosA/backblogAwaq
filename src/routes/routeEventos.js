const {Router} = require ("express");
const routeEventos = Router();
const {
    obtenerEventos,
    obtenerEventoPorId,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
  } = require("../controllers/eventosController");

routeEventos.get("/", obtenerEventos);
routeEventos.get("/:id", obtenerEventoPorId);
routeEventos.post("/", crearEvento);
routeEventos.put("/:id", actualizarEvento);
routeEventos.delete("/:id", eliminarEvento);

module.exports = routeEventos;
