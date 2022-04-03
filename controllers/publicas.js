const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require('../configuraciones/index')
const { obtenerPorUsuario, crearUsuario } = require("./usuarios")

module.exports = {
  async login(req, res) {
    try {
      const { usuario, password } = req.body;

      if (!usuario || !password) {
        return res.status(400).send("Verificar la información enviada.")
      }

      const user = await obtenerPorUsuario(usuario)

      if (user.length == 0) {
        return res.status(404).send("No existe el usuario.")
      }

      let mach = bcrypt.compareSync(password, user[0].password);
      if (!mach) {
        return res.status(401).send("Contraseña ingresada inválida.")
      }

      const token = jwt.sign({ usuario, password }, config.secretKey, {
        expiresIn: config.tokenExpirationTime
      });

      delete user[0].password;

      return res.status(200).json({ usuario: user[0], token })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  },
  async crear(req, res) {
    try {
      const { usuario, password, confirmar } = req.body;

      if (!usuario || !password || !confirmar) {
        return res.status(400).send("Verificar la información enviada.")
      }
      if (password !== confirmar) {
        return res.status(500).send("La validación de contraseña no es correcta.")
      }
      if (password.length < config.minPasswordLength) {
        return res.status(500).send("Logitud de contraseña inválida.")
      }

      const user = await obtenerPorUsuario(usuario)
      if (user.length > 0) {
        return res.status(409).send("Ya existe dicho usuario.")
      }

      const hash = await bcrypt.hash(password, 10);
      const usuario_creado = await crearUsuario({ usuario, password: hash, activo: true })
      return res.status(201).json({ ...usuario_creado, usuario, password: hash, activo: true })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}