const { Usuario } = require("../db");

async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener los usuarios" });
  }
}

async function obtenerUsuarioPorId(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al obtener el usuario" });
  }
}

async function crearUsuario(req, res) {
  const body = req.body;
  console.log(body);
  const { username, password, role } = req.body;
  try {
    const usuario = await Usuario.create({ username, password, role });
    res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el usuario" });
  }
}

async function actualizarUsuario(req, res) {
  const { id } = req.params;
  const { nombre, email, contraseña } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    await usuario.update({ nombre, email, contraseña });
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al actualizar el usuario" });
  }
}

async function eliminarUsuario(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    await usuario.destroy();
    res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al eliminar el usuario" });
  }
}

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
