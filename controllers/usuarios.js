const axios = require("axios");
const { fakeUrlDB } = require("../configuraciones");
const service = 'usuario'

module.exports = {
  async getUser(usuario) {
    return axios.post(`${fakeUrlDB}/${service}`, {
      usuario
    })
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