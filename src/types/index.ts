export type Appraisal = {
  name: string  /* required */
  telephone: Array<string>  /* required */
  email: Array<string>  /* required */
  address: string
  number_address: string
  postal_code: string
  city: string
  province: string
  community: string
  country: string
  assigned_to: string
  VIN: string /* required */
  plate: string /* required */
  year: number
  car_brand: string
  car_model: string
  origin: string
  campaign: string
  lead_id: string
  client_type: string
}

export type Sale = {
  name: string  /* required */
  telephone: Array<string>  /* required */
  email: Array<string>  /* required */
  address: string
  number_address: string
  postal_code: string
  city: string
  community: string
  province: string
  country: string
  assigned_to: string
  car_type: string
  client_type: string /* required */
  category: string
  car_brand: string
  car_model: string
  origin: string
  campaign: string
  lead_id: string
  VIN: string /* required */
  plate: string /* required */
}