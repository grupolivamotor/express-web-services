import { NextFunction, Request, Response } from 'express'
import errorMiddleware from '../../src/middlewares/handleError'
import HttpException from '../../src/exceptions/HttpException'

describe('Error handler middleware', () => {
  const error: HttpException = {
    name: 'error',
    status: 500,
    message: 'string',
  }
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  const nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {}
    mockResponse = {
      status: jest.fn().mockReturnThis(), // This line
      send: jest.fn(), // also mocking for send function
    }
  })

  test('handle error when error includes statusCode', async () => {
    errorMiddleware(
      error as HttpException,
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    )

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(nextFunction).not.toHaveBeenCalled()
  })
})
