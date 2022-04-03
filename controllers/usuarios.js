const { fakeUrlDB } = require("../configuraciones");
const axios = require("axios").create({ baseUrl: "https://my-json-server.typicode.com/nosoni/edge_test/" });
const service = 'usuarios'

module.exports = {
  async getUser(usuario) {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'usuarios',
      headers: {}
    };

    const respuesta = await axios(config)
    return respuesta
  },
  async createUser(usuario) {
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