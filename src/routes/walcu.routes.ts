import { Router } from 'express'
import * as walcuController from '../controllers/walcu.controller'
const walcuRoutes = Router()

walcuRoutes.get('/webhook', walcuController.getWebhook)
walcuRoutes.post('/webhook', walcuController.postWebhookSale)
walcuRoutes.post('/compras/', walcuController.postWebhookBuy)


export default walcuRoutes
