const express = require('express')
const router = express.Router()
const usuarios = require("../controllers/usuarios")

router.get(`/filtrar/:usuario`, usuarios.filtrar)
router.get(`/listar`, usuarios.listar)
router.put(`/editar`, usuarios.editar)
router.put(`/eliminar/:id`, usuarios.eliminar)

module.exports = router;