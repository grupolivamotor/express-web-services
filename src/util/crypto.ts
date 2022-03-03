import crypto from 'crypto'

class MyCrypto {
  static encryptSignature = (secret_key: string, data: string): string => {
    const hmac = crypto.createHmac('sha256', secret_key)
    hmac.update(data)
    return hmac.digest('base64')
  }
}

export default MyCrypto