import 'dotenv/config'
import express from 'express'
import lusca from 'lusca'
import morgan from 'morgan'
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger_output.json'

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(morgan('dev'))

app.use(routes)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

export default app
