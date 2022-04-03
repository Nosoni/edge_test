const { fakeUrlDB } = require("../configuraciones");
<<<<<<< HEAD
const axios = require("axios").create({ baseUrl: "https://my-json-server.typicode.com/nosoni/edge_test/" });
=======
const axios = require("axios");
>>>>>>> develop
const service = 'usuarios'

module.exports = {
  async getUser(usuario) {
<<<<<<< HEAD
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'usuarios',
      headers: {}
    };

    const respuesta = await axios(config)
    return respuesta
=======
    var config = {
      method: 'get',
      headers: {
        'content-type': 'application/json',
      },
      url: `${fakeUrlDB}/${service}`,
    };

    return await axios(config).then(response => response.data)
>>>>>>> develop
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