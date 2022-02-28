import { Request, Response } from 'express'
import crypto, { BinaryLike } from 'crypto'

declare module 'http' {
  interface IncomingHttpHeaders {
    'x-walcu-webhook-signature': string
  }
}

/**
 * Walcu WebHook.
 * @route GET /
 */
export const getWebhook = (req: Request, res: Response) => {
  res.status(200).send('Web Services Server')
}

/**
 * Walcu WebHook.
 * @route POST /
 */
export const postWebhookSale = (req: Request, res: Response) => {
  const { data } = req.body

  const secret_key: BinaryLike = req.headers['x-walcu-webhook-signature']
  const hmac = crypto.createHmac('sha256', secret_key)
  hmac.update(`${process.env.URL}/walcu/webhook.${JSON.stringify(data)}`)

  const signature = hmac.digest('base64')

  console.log(req.headers)
  console.log(signature)

  console.log(data)

  res.status(200).end()
}

/**
 * Walcu WebHook Ventas
 * @route POST /
 */

export const postWebhookBuy = (req: Request, res: Response) => {
  const { data } = req.body
  console.log(req.headers.host)
  console.log(req.originalUrl)

  console.log(data)

  res.status(200).end()
}
