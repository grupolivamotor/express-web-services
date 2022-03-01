import HttpException from './HttpException'

class NotSignatureProvided extends HttpException {
  constructor() {
    super(403, 'No signature provided')
  }
}

export default NotSignatureProvided
