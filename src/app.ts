import 'dotenv/config'
import express from 'express'
import lusca from 'lusca'
import morgan from 'morgan'
import routes from './routes'

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(morgan('dev'))

app.use(routes)

export default app
