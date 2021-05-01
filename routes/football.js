const express = require('express')
const router = express.Router()

const footballService = require('../services/football.service')
router.get('/football', footballService.getFootballData)

module.exports = router
