import { Router } from 'express'
import * as walcuController from '../controllers/walcu.controller'
import { verifySignature } from '../middlewares/authWalcu'

const walcuRoutes = Router()

walcuRoutes.get('/ventas', walcuController.getWebhook)
walcuRoutes.post('/ventas', [verifySignature], walcuController.postWebhookSale)
walcuRoutes.post('/compras/', walcuController.postWebhookBuy)


export default walcuRoutes
