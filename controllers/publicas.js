const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require('../configuraciones/index')
const { getUser, createUser } = require("./usuarios")

module.exports = {
  async login(req, res) {
    try {
      const { usuario, password } = req.body;

      if (!usuario || !password) {
        return res.status(400).send("Verificar la información enviada.")
      }

      const user = await getUser(usuario)

      if (!user) {
        return res.status(404).send("No existe el usuario.")
      }

      let mach = bcrypt.compareSync(password, user.password);
      if (!mach) {
        return res.status(401).send("Contraseña ingresada inválida.")
      }

      const token = jwt.sign({ usuario, password }, config.secretKey, {
        expiresIn: config.tokenExpirationTime
      });

      delete user.password;

      return res.status(200).json({ ...user, token })
    } catch (error) {
      return res.status(500).send({ mensaje: error.message })
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

      const user = await getUser(usuario)
      if (user) {
        return res.status(409).send("Ya existe dicho usuario.")
      }

      const hash = await bcrypt.hash(password, 10);
      await createUser({ usuario, password: hash, activo: true }).then(response => {
        return res.status(201).json(response)
      })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}