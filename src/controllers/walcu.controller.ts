import { Request, Response } from 'express'

/**
 * Walcu WebHook.
 * @route POST /
 */

export const postWebhookSale = (req: Request, res: Response) => {
  const data = req.body
  // console.log(data)
  res.status(200).json(data)
}

/**
 * Walcu WebHook Ventas
 * @route POST /
 */

export const postWebhookAppraisals = (req: Request, res: Response) => {
  const data = req.body
  // console.log(data)
  res.status(200).json(data)
}
