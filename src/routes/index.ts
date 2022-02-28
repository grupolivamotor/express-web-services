import { Router } from 'express'
import homeRoutes from './home.routes'
import walcuRoutes from './walcu.routes'

const routes = Router()

routes.use('/', homeRoutes)
routes.use('/walcu', walcuRoutes)

export default routes