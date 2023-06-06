const { Router } = require('express');
const routeArticulos = require ("./routeArticulos");
const routeEventos = require ("./routeEventos");
const routeNoticias = require ("./routeNoticias");
const routeUsuarios = require ("./routeUsuarios");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/articulos", routeArticulos)
router.use("/eventos", routeEventos)
router.use("/noticias", routeNoticias)
router.use("/usuario", routeUsuarios)


module.exports = router;