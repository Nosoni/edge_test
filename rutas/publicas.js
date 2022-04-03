const express = require('express')
const router = express.Router()
const publicas = require("../controllers/publicas")

router.post(`/login`, publicas.login)
router.post(`/crear`, publicas.crear)

module.exports = router;