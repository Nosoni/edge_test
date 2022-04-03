const express = require('express')
const cors = require('cors')
const config = require('./configuraciones/index')
const publicas = require('./rutas/publicas')
const privadas = require('./rutas/privadas')

const app = express()

app.use(express.json())
app.use(cors())

app.use(publicas)
app.use(privadas)

app.listen(config.port, () => {
  console.log(`puerto: ${config.port}`)
})