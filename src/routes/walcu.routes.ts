import { Router } from 'express'
import * as walcuController from '../controllers/walcu.controller'
import { verifySignature } from '../middlewares/authWalcu'

const walcuRoutes = Router()

walcuRoutes.get('/webhook', walcuController.getWebhook)
walcuRoutes.post('/webhook', [verifySignature], walcuController.postWebhookSale)
walcuRoutes.post('/compras/', walcuController.postWebhookBuy)


export default walcuRoutes
