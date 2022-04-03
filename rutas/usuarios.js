const express = require('express')
const router = express.Router()
const usuarios = require("../controllers/usuarios")

router.get(`/filtrar`, usuarios.filtrar)
router.get(`/listar`, usuarios.listar)
router.put(`/editar`, usuarios.editar)
router.delete(`/eliminar`, usuarios.eliminar)

module.exports = router;