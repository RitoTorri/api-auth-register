const swaggerAutoGen = require('swagger-autogen')

const outputFile = './swagger.json'
const endpointsFiles = ['../src/app.js']

const docs = {
    info: {
        title: 'AuthAPI',
        version: '1.0.0',
        description: 'Esta API permite registrar y autenticar usuarios.',
    },
    host: 'localhost:3000',
    schemes: ['http']
}

swaggerAutoGen()(outputFile, endpointsFiles, docs)