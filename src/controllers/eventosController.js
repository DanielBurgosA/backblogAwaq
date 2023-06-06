const Evento = require("../models/Evento");

async function obtenerEventos(req, res) {
  try {
    const eventos = await Evento.findAll();
    res.json(eventos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener los eventos" });
  }
}

async function obtenerEventoPorId(req, res) {
  const { id } = req.params;
  try {
    const evento = await Evento.findByPk(id);
    if (!evento) {
      return res.status(404).json({ mensaje: "Evento no encontrado" });
    }
    res.json(evento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al obtener el evento" });
  }
}

async function crearEvento(req, res) {
  const { fecha, titulo, ubicacion, tema, descripcion } = req.body;
  try {
    const evento = await Evento.create({
      fecha,
      titulo,
      ubicacion,
      tema,
      descripcion,
    });
    res.status(201).json(evento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el evento" });
  }
}

async function actualizarEvento(req, res) {
  const { id } = req.params;
  const { fecha, titulo, ubicacion, tema, descripcion } = req.body;
  try {
    const evento = await Evento.findByPk(id);
    if (!evento) {
      return res.status(404).json({ mensaje: "Evento no encontrado" });
    }
    await evento.update({ fecha, titulo, ubicacion, tema, descripcion });
    res.json(evento);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al actualizar el evento" });
  }
}

async function eliminarEvento(req, res) {
  const { id } = req.params;
  try {
    const evento = await Evento.findByPk(id);
    if (!evento) {
      return res.status(404).json({ mensaje: "Evento no encontrado" });
    }
    await evento.destroy();
    res.json({ mensaje: "Evento eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al eliminar el evento" });
  }
}

module.exports = {
  obtenerEventos,
  obtenerEventoPorId,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
