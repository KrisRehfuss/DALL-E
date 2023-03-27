// Brings in 'Express' to use the router
const express = require('express')
// Link to Controller
const { generateImage } = require('../controllers/openaiController')
const router = express.Router()




router.post('/generateimage', generateImage)
// Ultimately causes us to hit '/openai /generateimage'

// Exports router
module.exports = router


