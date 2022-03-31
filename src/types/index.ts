export type Appraisal = {
  postal_code: string
  telephone: Array<string>  /* required */
  origin: string
  community: string
  city: string
  name: string  /* required */
  number_address: string
  campaign: string
  province: string
  address: string
  country: string
  VIN: string
  assigned_to: string
  car_brand: string
  email: Array<string>  /* required */
  year: number
  lead_id: string
  plate: string /* required */
  car_model: string
  client_type: string
}

export type Sale = {
  postal_code: string
  campaign: string
  telephone: Array<string>  /* required */
  car_type: string
  origin: string
  community: string
  city: string
  name: string  /* required */
  number_address: string
  client_type: string /* required */
  province: string
  address: string
  country: string
  assigned_to: string
  car_brand: string
  email: Array<string>  /* required */
  lead_id: string
  category: string
  car_model: string
  VIN: string /* required */
  plate: string
}