import { NextFunction, Request, Response } from 'express'
import NotAuthorizedException from '../exceptions/NotAuthorizedException'
import NotSignatureProvided from '../exceptions/NotSignatureProvided'
import { WALCU_WEBHOOK_SALES } from '../util/secrets'
import crypto from 'crypto'

declare module 'http' {
  interface IncomingHttpHeaders {
    'x-walcu-webhook-signature': string
  }
}

export const verifySignature = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body

  const walku_signature = req.headers['x-walcu-webhook-signature']
  const secret_key: string = WALCU_WEBHOOK_SALES

  const hmac = crypto.createHmac('sha256', secret_key)
  hmac.update(`${process.env.URL}/api/v1/walcu/sales.${JSON.stringify(data)}`)
  const signature = hmac.digest('base64')

  if (!walku_signature) {
    throw new NotSignatureProvided
  }

  if(walku_signature === signature) {
    next()
  } else {
    throw new NotAuthorizedException
  }

}
