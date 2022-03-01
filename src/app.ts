import express from 'express'
import lusca from 'lusca'
import morgan from 'morgan'
import routes from './routes'
import errorMiddleware from './middlewares/handleError'
import { PORT, ENVIRONMENT } from './util/secrets'

import swaggerUi from 'swagger-ui-express'
import swaggerFile from './doc/swagger_output.json'

const app = express()
const prod = ENVIRONMENT === 'production'

app.set('port', PORT || 3000)
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(prod ? morgan('combined') : morgan('dev'))

app.use(routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(errorMiddleware)

export default app
