export type Appraisal = {
  postal_code: string
  telephone: Array<string>
  origin: string
  community: string
  city: string
  name: string
  number_address: string
  campaign: string
  province: string
  address: string
  country: string
  VIN: string
  assigned_to: string
  car_brand: string
  email: Array<string>
  year: number
  lead_id: string
  plate: string
  car_model: string
}

export type Sale = {
  postal_code: string
  campaign: string
  telephone: string
  car_type: string
  origin: string
  community: string
  city: string
  name: string
  number_address: string
  client_type: string
  province: string
  address: string
  country: string
  assigned_to: string
  car_brand: string
  email: Array<string>
  lead_id: string
  category: string
  car_model: string
  VIN: string
  plate: string
}