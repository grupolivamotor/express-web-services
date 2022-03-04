import { NextFunction, Request, Response } from 'express'
import NotAuthorizedException from '../exceptions/NotAuthorizedException'
import NotSignatureProvided from '../exceptions/NotSignatureProvided'
import HttpException from '../../src/exceptions/HttpException'
import { WALCU_WEBHOOK_SALES, WALCU_WEBHOOK_APPRAISALS } from '../util/secrets'
import MyCrypto from '../util/crypto'

declare module 'http' {
  interface IncomingHttpHeaders {
    'x-walcu-webhook-signature': string
  }
}

export const verifySignature = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body
  if (Object.keys(data).length === 0) throw new HttpException(400, 'No data body')

  const payload = `${process.env.URL}${req.originalUrl}.${JSON.stringify(data)}`

  if (!req.headers || !req.headers['x-walcu-webhook-signature']) {
    throw new NotSignatureProvided
  } else {
    const walku_signature = req.headers['x-walcu-webhook-signature']
    const secret_key: string = req.route.path === '/sales' ? WALCU_WEBHOOK_SALES : WALCU_WEBHOOK_APPRAISALS
  
    const signature = MyCrypto.encryptSignature(secret_key, payload)
    if(walku_signature === signature) {
      next()
    } else {
      throw new NotAuthorizedException
    }
  }
}
