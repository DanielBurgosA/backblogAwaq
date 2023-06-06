const {Router} = require ("express");
const routeUsuarios = Router();
const {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
  } = require("../controllers/usuarioController");

routeUsuarios.get("/", obtenerUsuarios);
routeUsuarios.get("/:id", obtenerUsuarioPorId);
routeUsuarios.post("/", crearUsuario);
routeUsuarios.put("/:id", actualizarUsuario);
routeUsuarios.delete("/:id", eliminarUsuario);

module.exports = routeUsuarios;
