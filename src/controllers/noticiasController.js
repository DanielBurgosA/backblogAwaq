const Noticia = require("../models/Noticia");

async function obtenerNoticias(req, res) {
  try {
    const noticias = await Noticia.findAll();
    res.json(noticias);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener las noticias" });
  }
}

async function obtenerNoticiaPorId(req, res) {
  const { id } = req.params;
  try {
    const noticia = await Noticia.findByPk(id);
    if (!noticia) {
      return res.status(404).json({ mensaje: "Noticia no encontrada" });
    }
    res.json(noticia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al obtener la noticia" });
  }
}

async function crearNoticia(req, res) {
  const { autor, titulo, copete, parrafos, imagen } = req.body;
  try {
    const noticia = await Noticia.create({
      autor,
      titulo,
      copete,
      parrafos,
      imagen,
    });
    res.status(201).json(noticia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear la noticia" });
  }
}

async function actualizarNoticia(req, res) {
  const { id } = req.params;
  const { autor, titulo, copete, parrafos, imagen } = req.body;
  try {
    const noticia = await Noticia.findByPk(id);
    if (!noticia) {
      return res.status(404).json({ mensaje: "Noticia no encontrada" });
    }
    await noticia.update({ autor, titulo, copete, parrafos, imagen });
    res.json(noticia);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al actualizar la noticia" });
  }
}

async function eliminarNoticia(req, res) {
  const { id } = req.params;
  try {
    const noticia = await Noticia.findByPk(id);
    if (!noticia) {
      return res.status(404).json({ mensaje: "Noticia no encontrada" });
    }
    await noticia.destroy();
    res.json({ mensaje: "Noticia eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al eliminar la noticia" });
  }
}

module.exports = {
  obtenerNoticias,
  obtenerNoticiaPorId,
  crearNoticia,
  actualizarNoticia,
  eliminarNoticia,
};
