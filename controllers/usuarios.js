const axios = require("axios");
const servicio = 'usuarios'
const { peticion } = require("../helpers");

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

    let filtrado = '';
    Object.keys(req.body).map(key => {
      filtrado += `${key}=${req.body[key]}&`
    })

    if (!filtrado) {
      return res.status(400).send("Debe indicar un valor para filtrar")
    }

    var config = {
      method: 'get',
      servicio: `${servicio}?${filtrado.slice(0, -1)}`,
    };

    const usuarios = await peticion(config)
      .then(response => response.map(usuario => {
        delete usuario.password
        return usuario
      }))

    return res.status(200).send(usuarios)
  },
  async listar(req, res) {

    var config = {
      method: 'get',
      servicio: `${servicio}`,
    };

    return res.status(200).send(await peticion(config))
  },
  async editar(req, res) {

  },
  async eliminar(req, res) {

  }
};