const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const usuarios = require('./usuarios')
const { secretKey } = require('../configuraciones/index')

router.all("*", requiereAutenticacion)
router.use("/usuarios", usuarios)

async function requiereAutenticacion(req, res, next) {
  try {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
      return res.status(401).send("Error de autenticación.")
    }

    const token = bearerHeader.split(' ')[1]

    jwt.verify(token, req.app.get(secretKey), (err, decoded) => {
      if (err) {
        return res.status(401).send("Token expirado.")
      }
      req.user_login_id = jwt.decode(token).id;
      req.decoded = decoded
      return next()
    })
  } catch (error) {
    return res.status(500).send("Error en autenticación")
  }
}

module.exports = router;