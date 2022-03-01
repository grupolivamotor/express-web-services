/* eslint-disable @typescript-eslint/no-var-requires */
const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: '1.0.0',
    title: 'WebServices API',
    description: 'Documentation to WebServices API'
  },
  host: 'webservices.grupolivamotor.com',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      'name': 'Walcu',
      'description': 'Endpoints'
    }
  ],
  paths: {
    '/api/v1/walcu/sales': {
      post:{
        tags: ['Walcu'],
        description: 'Generate new JSON sale to PAPYRUM',
      }
    }
  }
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/index.ts']

swaggerAutogen(outputFile, endpointsFiles, doc)