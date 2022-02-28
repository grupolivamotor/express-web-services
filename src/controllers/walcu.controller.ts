import { Request, Response } from 'express'

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
  const data = req.body

  res.status(200).json(data)
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
