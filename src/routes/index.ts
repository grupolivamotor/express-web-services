import { Router } from 'express'
import homeRoutes from './home.routes'
import walcuRoutes from './walcu.routes'

const routes = Router()

routes.use('/', homeRoutes)
routes.use('/api/v1/walcu', walcuRoutes)

export default routes