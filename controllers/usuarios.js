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

  },
  async listar(req, res) {

  },
  async editar(req, res) {

  },
  async eliminar(req, res) {

  }
};