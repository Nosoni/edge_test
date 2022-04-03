const axios = require("axios");
const servicio = 'usuarios'
const { minPasswordLength } = require('../configuraciones/index')
const { peticion } = require("../helpers");

const filtarUsuario = async (usuario) => {
  let filtrado = '';
  Object.keys(usuario).map(key => {
    filtrado += `${key}=${usuario[key]}&`
  })

  if (!filtrado) {
    throw new Error("Debe indicar un valor para filtrar")
  }

  var config = {
    method: 'get',
    servicio: `${servicio}?${filtrado.slice(0, -1)}`,
  };

  const usuarios_filtrados = await peticion(config)
    .then(response => response.map(usuario => {
      delete usuario.password
      return usuario
    }))

  return usuarios_filtrados
}

module.exports = {
  async obtenerPorUsuario(usuario) {
    var config = {
      method: 'get',
      servicio: `${servicio}?usuario=${usuario}`,
    };

    return await peticion(config)
  },
  async crearUsuario(usuario) {
    var config = {
      method: 'post',
      servicio: `${servicio}`,
      body: JSON.stringify(usuario)
    };

    return await peticion(config)
  },
  async filtrar(req, res) {
    await filtarUsuario(req.body)
      .then(response => {
        return res.status(200).send(response)
      }).catch(error => {
        return res.status(400).send(error.message)
      })
  },
  async listar(req, res) {
    var config = {
      method: 'get',
      servicio: `${servicio}`,
    };

    return res.status(200).send(await peticion(config))
  },
  async editar(req, res) {
    if (!req.body.id) {
      return res.status(400).send("Verificar la información enviada.")
    }

    const { id, usuario, password, confirmar } = req.body;

    if (!usuario || !password || !confirmar) {
      return res.status(400).send("Verificar la información enviada.")
    }
    if (password !== confirmar) {
      return res.status(500).send("La validación de contraseña no es correcta.")
    }
    if (password.length < minPasswordLength) {
      return res.status(500).send("Logitud de contraseña inválida.")
    }

    const usuario_filtrado = await filtarUsuario({ id })
      .catch(error => {
        return res.status(400).send(error.message)
      })

    if (usuario_filtrado.length == 0) {
      return res.status(500).send("No existe el usuario a editar.")
    }

    var config = {
      method: 'put',
      servicio: `${servicio}/${id}`,
      body: JSON.stringify({ ...usuario_filtrado[0], usuario, password })
    };

    await peticion(config).then(response => {
      delete usuario_filtrado[0].password
      return res.status(200).send({ ...response, ...usuario_filtrado[0], usuario })
    })
  },
  async eliminar(req, res) {
    const { id } = req.body;

    if (!id) {
      return res.status(400).send("Verificar la información enviada.")
    }

    var config = {
      method: 'put',
      servicio: `${servicio}/${id}`,
      body: JSON.stringify({ activo: false })
    };

    await peticion(config).then(() => {
      return res.status(200).send("Usuario eliminado con éxito.")
    })
  }
};