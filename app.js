//imports
const express = require('express')
const cors = require('cors')
const config = require('./configuraciones/index')
const publicas = require('./rutas/publicas')
const privadas = require('./rutas/privadas')

//APP
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//rutas
app.use(publicas)
app.use(privadas)

app.listen(config.port, () => {
  console.log(`puerto: ${config.port}`)
})