//imports
const express = require('express')
const cors = require('cors')
const config = require('./configuraciones/index')

//APP
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

app.listen(config.port, () => {
  console.log(`puerto: ${config.port}`)
})