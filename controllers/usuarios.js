const axios = require("axios");
const { fakeUrlDB } = require("../configuraciones");
<<<<<<< Updated upstream
const service = 'usuario'

module.exports = {
  async getUser(usuario) {
    return axios.post(`${fakeUrlDB}/${service}`, {
      usuario
    })
=======
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
>>>>>>> Stashed changes
  },
  async createUser(usuario) {
    const secuencia = axios.get(`${fakeUrlDB}/usuario_sqc`)
    console.log(secuencia)
    return axios.post(`${fakeUrlDB}/${service}`, {
      id: secuencia, ...usuario
    })
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