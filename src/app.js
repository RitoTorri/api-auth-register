// import dependencies
const express = require('express')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

// import routes
const authRoute = require('./routes/auth.route')
const registerRoute = require('./routes/register.route')

// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../docs/swagger.json')


const app = express() // create express app

// middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.set('port', process.env.PORT) // set port

// url Api
const urlBase = '/api/v1'

// routes
app.use(urlBase + "/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(urlBase, authRoute)
app.use(urlBase, registerRoute)

module.exports = app
