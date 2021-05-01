const express = require('express')
const router = express.Router()

const testService = require('../services/test.service')
const footballService = require('../services/football.service')
router.get('/test', testService.getTestFunction)
router.get('/football', footballService.getFootballData)

module.exports = router
