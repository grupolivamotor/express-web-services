import { Request, Response } from 'express'

/**
 * Walcu WebHook.
 * @route GET /
 */
export const getWebhook = (req: Request, res: Response) => {
  /*
    #swagger.tags = ['Walcu']
    #swagger.description = 'Returns one specific user'
    #swagger.parameters['id'] = { description: 'ID of the user. (required)' }
  */
  res.status(200).send('Web Services Server')
}

/**
 * Walcu WebHook.
 * @route POST /
 */
export const postWebhookSale = (req: Request, res: Response) => {
  // #swagger.tags = ['Walcu']
  const data = req.body

  res.status(200).json(data)
}

/**
 * Walcu WebHook Ventas
 * @route POST /
 */
export const postWebhookBuy = (req: Request, res: Response) => {
  // #swagger.tags = ['Walcu']
  const data = req.body

  res.status(200).json(data)
}
