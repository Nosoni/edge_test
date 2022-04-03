const axios = require("axios");
const { fakeUrlDB } = require("../configuraciones");

const peticion = async (config) => {
  try {
    const response = await axios({
      headers: {
        'content-type': 'application/json',
      },
      url: `${fakeUrlDB}/${config.servicio}`,
      ...config
    })
    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = { peticion };