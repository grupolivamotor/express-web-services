import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import crypto from 'crypto'

declare module 'http' {
  interface IncomingHttpHeaders {
    'x-walcu-webhook-signature': string
  }
}

export const verifySignature = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body
  const walku_signature = req.headers['x-walcu-webhook-signature']
  const secret_key: string = process.env.WALCU_WEBHOOK_BUY

  const hmac = crypto.createHmac('sha256', secret_key)
  hmac.update(`${process.env.URL}/walcu/webhook.${JSON.stringify(data)}`)
  const signature = hmac.digest('base64')

  if (!walku_signature) {
    res.status(403).send({ message: 'No signature provided' })
  }

  if(walku_signature === signature) {
    next()
  } else {
    res.status(401).send({ message: 'Unauthorized!' })
  }

}
