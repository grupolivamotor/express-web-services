import { Router } from 'express'
import * as walcuController from '../controllers/walcu.controller'
import { verifySignature } from '../middlewares/authWalcu'

const walcuRoutes = Router()

walcuRoutes.post('/sales', [verifySignature], walcuController.postWebhookSale)
walcuRoutes.post('/appraisals/', [verifySignature], walcuController.postWebhookAppraisals)

export default walcuRoutes
