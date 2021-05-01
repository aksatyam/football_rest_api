const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))

const test = require('./routes/test')
app.use('/api/v1', test)

module.exports = app