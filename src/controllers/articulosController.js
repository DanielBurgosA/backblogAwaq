const { Articulo } = require("../db");


async function obtenerArticulos(req, res) {
  try {
    const articulos = await Articulo.findAll();
    res.json(articulos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener los artículos" });
  }
}

async function obtenerArticuloPorId(req, res) {
  const { id } = req.params;
  try {
    const articulo = await Articulo.findByPk(id);
    if (!articulo) {
      return res.status(404).json({ mensaje: "Artículo no encontrado" });
    }
    res.json(articulo);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener el artículo" });
  }
}

async function crearArticulo(req, res) {
  const { author, title, lead, paragraphs, image, category } = req.body;
  try {
    const articulo = await Articulo.create({
      author,
      title,
      lead,
      paragraphs,
      image,
      category,
    });
    res.status(201).json(articulo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el artículo" });
  }
}

async function actualizarArticulo(req, res) {
  const { id } = req.params;
  const { author, title, lead, paragraphs, image, category } = req.body;
  try {
    const articulo = await Articulo.findByPk(id);
    if (!articulo) {
      return res.status(404).json({ mensaje: "Artículo no encontrado" });
    }
    await articulo.update({ author, title, lead, paragraphs, image, category });
    res.json(articulo);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al actualizar el artículo" });
  }
}

async function eliminarArticulo(req, res) {
  const { id } = req.params;
  try {
    const articulo = await Articulo.findByPk(id);
    if (!articulo) {
      return res.status(404).json({ mensaje: "Artículo no encontrado" });
    }
    await articulo.destroy();
    res.json({ mensaje: "Artículo eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al eliminar el artículo" });
  }
}

module.exports = {
  obtenerArticulos,
  obtenerArticuloPorId,
  crearArticulo,
  actualizarArticulo,
  eliminarArticulo,
};
