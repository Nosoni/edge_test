const { fakeUrlDB } = require("../configuraciones");
const axios = require("axios");
const service = 'usuarios'

module.exports = {
  async getUser(usuario) {
    var config = {
      method: 'get',
      headers: {
        'content-type': 'application/json',
      },
      url: `${fakeUrlDB}/${service}`,
    };

    return await axios(config).then(response => response.data)
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