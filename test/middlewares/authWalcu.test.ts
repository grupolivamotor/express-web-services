import { NextFunction, Request, Response } from 'express'
import { verifySignature } from '../../src/middlewares/authWalcu'
import NotSignatureProvided from '../../src/exceptions/NotSignatureProvided'
import HttpException from '../../src/exceptions/HttpException'
import NotAuthorizedException from '../../src/exceptions/NotAuthorizedException'

describe('Middleware to authentication Walcu', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  const nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {
      headers: {
        'x-walcu-webhook-signature': ''
      },
      body: {
        'key': 'value' 
      }
    }
    mockResponse = {
      status: jest.fn().mockReturnThis(), // This line
      send: jest.fn().mockReturnThis(), // also mocking for send function
    }
  })

  test('handle error to request no header x-walcu-webhook-signature', async () => {
    expect(() => {
      verifySignature(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      )
    }).toThrowError(NotSignatureProvided)
  })
})

describe('Middleware to authentication Walcu', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  const nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {
      headers: {
        'x-walcu-webhook-signature': '',
      },
      body: {},
    }
    mockResponse = {
      status: jest.fn().mockReturnThis(), // This line
      send: jest.fn().mockReturnThis(), // also mocking for send function
    }
  })

  test('handle error to request data is empty', async () => {
    expect(() => {
      verifySignature(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      )
    }).toThrowError(HttpException)
  })
})

describe('Middleware to authentication Walcu', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  const nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {
      headers: {
        'x-walcu-webhook-signature':
          'f4ONkpSzQg8Ul5pzAvf+ywDnDDtdHJdte3h5wSvCXgM=',
      },
      url: 'localhost:5005',
      body: {
        nombre: 'GERARD ÁLVAREZ',
        telefono: ['+34689137955'],
        email: ['test@test.com'],
      },
    }
    mockResponse = {
      status: jest.fn().mockReturnThis(), // This line
      send: jest.fn().mockReturnThis(), // also mocking for send function
    }
  })

  test('handle error to x-walcu-webhook-signature is not valid', async () => {
    expect(() => {
      verifySignature(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      )
    }).toThrowError(NotAuthorizedException)
  })
})