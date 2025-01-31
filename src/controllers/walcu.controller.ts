import { Request, Response } from 'express'
import { Appraisal, Sale } from '../types'
import { KULTEO_API_URL, KULTEO_API_USERNAME, KULTEO_API_PASS } from '../util/secrets'
import axios from 'axios'

/**
 * Walcu WebHook.
 * @route POST /
 */

export const postWebhookSale = async (req: Request, res: Response) => {
  try {
    const data = req.body as unknown as Sale
  
    const result = await axios.post(`${KULTEO_API_URL}/sales`, data, {
      auth: {
        username: KULTEO_API_USERNAME,
        password: KULTEO_API_PASS
      }
    })
  
    console.log(result)
  
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

/**
 * Walcu WebHook Ventas
 * @route POST /
 */

export const postWebhookAppraisals = async (req: Request, res: Response) => {
  try {
    const data = req.body as unknown as Appraisal
  
    data.car_mileage = data.car_mileage.toString()
    data.price_value = data.price_value.toString()

    const result = await axios.post(`${KULTEO_API_URL}/appraisals`, data, {
      auth: {
        username: KULTEO_API_USERNAME,
        password: KULTEO_API_PASS,
      },
    })
  
    console.log(result)
    
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}
